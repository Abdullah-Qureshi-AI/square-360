import { CustomizeTourClient } from "@/components/travel-tours/CustomizeTourClient";
import { getTravelContent } from "@/lib/content/repository";

export default async function CustomizeTourPage() {
  const content = await getTravelContent();

  return <CustomizeTourClient tours={content.tours} options={content.travelFormOptions} />;
}

