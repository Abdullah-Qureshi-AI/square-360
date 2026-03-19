import "server-only";

import { readTravelContentStore, writeTravelContentStore } from "@/lib/content/local-store";
import type { TravelContentStore, TravelSiteSettings, TravelTour } from "@/lib/content/types";

export async function getTravelContent(): Promise<TravelContentStore> {
  return readTravelContentStore();
}

export async function getAllTours(): Promise<TravelTour[]> {
  const store = await readTravelContentStore();
  return store.tours;
}

export async function getFeaturedTours(): Promise<TravelTour[]> {
  const tours = await getAllTours();
  return tours.filter((tour) => tour.isFeatured);
}

export async function getTourById(id: string): Promise<TravelTour | null> {
  const tours = await getAllTours();
  return tours.find((tour) => tour.id === id) ?? null;
}

export async function getSiteSettings(): Promise<TravelSiteSettings> {
  const store = await readTravelContentStore();
  return store.siteSettings;
}

export async function createTour(tour: TravelTour): Promise<TravelTour> {
  const store = await readTravelContentStore();

  if (store.tours.some((item) => item.id === tour.id || item.slug === tour.slug)) {
    throw new Error("A tour with this id or slug already exists.");
  }

  const nextStore: TravelContentStore = {
    ...store,
    tours: [tour, ...store.tours],
  };

  await writeTravelContentStore(nextStore);
  return tour;
}

export async function updateTour(id: string, updatedTour: TravelTour): Promise<TravelTour> {
  const store = await readTravelContentStore();
  const existingTour = store.tours.find((tour) => tour.id === id);

  if (!existingTour) {
    throw new Error("Tour not found.");
  }

  if (
    store.tours.some(
      (tour) => tour.id !== id && (tour.id === updatedTour.id || tour.slug === updatedTour.slug)
    )
  ) {
    throw new Error("Another tour already uses this id or slug.");
  }

  const nextStore: TravelContentStore = {
    ...store,
    tours: store.tours.map((tour) => (tour.id === id ? updatedTour : tour)),
  };

  await writeTravelContentStore(nextStore);
  return updatedTour;
}

export async function deleteTour(id: string): Promise<void> {
  const store = await readTravelContentStore();
  const nextStore: TravelContentStore = {
    ...store,
    tours: store.tours.filter((tour) => tour.id !== id),
  };

  await writeTravelContentStore(nextStore);
}
