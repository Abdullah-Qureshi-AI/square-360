import { DestinationsClient } from "@/components/travel-tours/DestinationsClient";
import { getAllTours } from "@/lib/content/repository";

export default async function DestinationsPage() {
  const tours = await getAllTours();
  return <DestinationsClient tours={tours} />;
}
