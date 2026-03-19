import { defaultTravelContentStore } from "@/lib/content/defaults";
export type { TravelTour as ActiveTour, TravelTourStatus } from "@/lib/content/types";

export const activeTours = defaultTravelContentStore.tours;

export const joiningCities = defaultTravelContentStore.travelFormOptions.joiningCities;

export const packageTypes = defaultTravelContentStore.travelFormOptions.packageTypes;

export const placesToVisitOptions = defaultTravelContentStore.travelFormOptions.placesToVisitOptions;

export const hotelsOptions = defaultTravelContentStore.travelFormOptions.hotelsOptions;

export const vehiclesOptions = defaultTravelContentStore.travelFormOptions.vehiclesOptions;
