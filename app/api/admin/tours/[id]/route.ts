import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/admin/guard";
import { buildTourFromFormData } from "@/lib/admin/tour-form";
import { deleteTour, updateTour } from "@/lib/content/repository";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function POST(request: NextRequest, context: RouteContext) {
  if (!getAdminSessionFromRequest(request)) {
    return NextResponse.redirect(new URL("/admin/login", request.url), { status: 303 });
  }

  const { id } = await context.params;
  const formData = await request.formData();
  const intent = String(formData.get("_intent") ?? "update");

  try {
    if (intent === "delete") {
      await deleteTour(id);
      return NextResponse.redirect(new URL("/admin/tours?success=deleted", request.url), {
        status: 303,
      });
    }

    const updatedTour = buildTourFromFormData(formData);
    await updateTour(id, updatedTour);
    return NextResponse.redirect(new URL("/admin/tours?success=updated", request.url), {
      status: 303,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to update tour.";
    return NextResponse.redirect(
      new URL(`/admin/tours?error=${encodeURIComponent(message)}&edit=${id}`, request.url),
      { status: 303 }
    );
  }
}
