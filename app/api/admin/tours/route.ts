import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/admin/guard";
import { buildTourFromFormData } from "@/lib/admin/tour-form";
import { createTour } from "@/lib/content/repository";

export async function POST(request: NextRequest) {
  if (!getAdminSessionFromRequest(request)) {
    return NextResponse.redirect(new URL("/admin/login", request.url), { status: 303 });
  }

  try {
    const formData = await request.formData();
    const tour = buildTourFromFormData(formData);
    await createTour(tour);
    return NextResponse.redirect(new URL("/admin/tours?success=created", request.url), {
      status: 303,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create tour.";
    return NextResponse.redirect(
      new URL(`/admin/tours?error=${encodeURIComponent(message)}`, request.url),
      { status: 303 }
    );
  }
}
