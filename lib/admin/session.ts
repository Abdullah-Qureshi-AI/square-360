import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_COOKIE_NAME = "square360_admin_session";
const DEFAULT_SESSION_SECRET = "square360-local-session-secret";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 12;

export type AdminSession = {
  username: string;
  expiresAt: number;
};

function getSessionSecret(): string {
  return process.env.ADMIN_SESSION_SECRET ?? DEFAULT_SESSION_SECRET;
}

function sign(payload: string): string {
  return createHmac("sha256", getSessionSecret()).update(payload).digest("hex");
}

function safeCompare(a: string, b: string): boolean {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return timingSafeEqual(aBuffer, bBuffer);
}

export function createAdminSessionToken(username: string): string {
  const expiresAt = Date.now() + SESSION_DURATION_MS;
  const payload = `${username}:${expiresAt}`;
  const signature = sign(payload);
  return Buffer.from(`${payload}:${signature}`).toString("base64url");
}

export function verifyAdminSessionToken(token: string | null | undefined): AdminSession | null {
  if (!token) {
    return null;
  }

  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const [username, expiresAtRaw, signature] = decoded.split(":");

    if (!username || !expiresAtRaw || !signature) {
      return null;
    }

    const payload = `${username}:${expiresAtRaw}`;
    const expectedSignature = sign(payload);

    if (!safeCompare(signature, expectedSignature)) {
      return null;
    }

    const expiresAt = Number(expiresAtRaw);
    if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) {
      return null;
    }

    return { username, expiresAt };
  } catch {
    return null;
  }
}

export function getAdminSessionCookieOptions(expiresAt: number) {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(expiresAt),
  };
}
