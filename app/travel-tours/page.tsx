import { TravelHomeClient } from "@/components/travel-tours/TravelHomeClient";
import { getTravelContent } from "@/lib/content/repository";

export default async function TravelHomePage() {
  const content = await getTravelContent();

  return (
    <TravelHomeClient
      featuredTours={content.tours.filter((tour) => tour.isFeatured)}
      destinations={content.destinations}
      testimonials={content.testimonials}
      ownerProfile={content.ownerProfile}
      siteSettings={content.siteSettings}
    />
  );
}