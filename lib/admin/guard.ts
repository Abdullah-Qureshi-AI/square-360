import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";
import {
  ADMIN_SESSION_COOKIE_NAME,
  type AdminSession,
  verifyAdminSessionToken,
} from "@/lib/admin/session";

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  return verifyAdminSessionToken(cookieStore.get(ADMIN_SESSION_COOKIE_NAME)?.value);
}

export async function requireAdminSession(): Promise<AdminSession> {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  return session;
}

export async function redirectIfAdminAuthenticated(): Promise<void> {
  const session = await getAdminSession();

  if (session) {
    redirect("/admin");
  }
}

export function getAdminSessionFromRequest(request: NextRequest): AdminSession | null {
  return verifyAdminSessionToken(request.cookies.get(ADMIN_SESSION_COOKIE_NAME)?.value);
}
