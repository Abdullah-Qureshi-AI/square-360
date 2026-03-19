import type { TravelTour, TravelTourStatus } from "@/lib/content/types";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getRequiredText(formData: FormData, field: string): string {
  const value = String(formData.get(field) ?? "").trim();

  if (!value) {
    throw new Error(`${field} is required.`);
  }

  return value;
}

function getNumber(formData: FormData, field: string): number {
  const raw = String(formData.get(field) ?? "").trim();
  const value = Number(raw);

  if (!Number.isFinite(value)) {
    throw new Error(`${field} must be a valid number.`);
  }

  return value;
}

function getList(formData: FormData, field: string): string[] {
  const raw = String(formData.get(field) ?? "");
  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function getStatus(formData: FormData): TravelTourStatus {
  const value = String(formData.get("status") ?? "active");
  if (value === "active" || value === "upcoming" || value === "paused") {
    return value;
  }
  throw new Error("status is invalid.");
}

export function buildTourFromFormData(formData: FormData): TravelTour {
  const title = getRequiredText(formData, "title");
  const slug = slugify(String(formData.get("slug") ?? "") || title);
  const id = slugify(String(formData.get("id") ?? "") || slug);

  return {
    id,
    slug,
    title,
    region: getRequiredText(formData, "region"),
    destination: getRequiredText(formData, "destination"),
    durationDays: getNumber(formData, "durationDays"),
    startDateISO: getRequiredText(formData, "startDateISO"),
    endDateISO: getRequiredText(formData, "endDateISO"),
    departureCity: getRequiredText(formData, "departureCity"),
    seatsLeft: getNumber(formData, "seatsLeft"),
    status: getStatus(formData),
    highlights: getList(formData, "highlights"),
    price: getRequiredText(formData, "price"),
    originalPrice: getRequiredText(formData, "originalPrice"),
    image: getRequiredText(formData, "image"),
    features: getList(formData, "features"),
    rating: getNumber(formData, "rating"),
    reviews: getNumber(formData, "reviews"),
    discount: getRequiredText(formData, "discount"),
    isFeatured: String(formData.get("isFeatured") ?? "") === "on",
  };
}
