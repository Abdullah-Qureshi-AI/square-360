import { NextResponse } from "next/server";
import { validateAdminCredentials } from "@/lib/admin/auth";
import {
  ADMIN_SESSION_COOKIE_NAME,
  createAdminSessionToken,
  getAdminSessionCookieOptions,
  verifyAdminSessionToken,
} from "@/lib/admin/session";

export async function POST(request: Request) {
  const formData = await request.formData();
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!validateAdminCredentials(username, password)) {
    return NextResponse.redirect(new URL("/admin/login?error=invalid_credentials", request.url), {
      status: 303,
    });
  }

  const token = createAdminSessionToken(username);
  const session = verifyAdminSessionToken(token);

  if (!session) {
    return NextResponse.redirect(new URL("/admin/login?error=session_failed", request.url), {
      status: 303,
    });
  }

  const response = NextResponse.redirect(new URL("/admin", request.url), { status: 303 });
  response.cookies.set(
    ADMIN_SESSION_COOKIE_NAME,
    token,
    getAdminSessionCookieOptions(session.expiresAt)
  );
  return response;
}
