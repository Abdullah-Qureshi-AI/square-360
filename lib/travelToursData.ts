export type TravelTourStatus = "active" | "upcoming" | "paused";

export type ActiveTour = {
  id: string;
  title: string;
  region: string;
  destination: string;
  durationDays: number;
  startDateISO: string;
  endDateISO: string;
  departureCity: string;
  seatsLeft: number;
  status: TravelTourStatus;
  highlights: string[];
};

export const activeTours: ActiveTour[] = [
  {
    id: "hunza-spring-2026",
    title: "Northern Pakistan Adventure",
    region: "Pakistan",
    destination: "Hunza • Skardu • Fairy Meadows",
    durationDays: 8,
    startDateISO: "2026-04-05",
    endDateISO: "2026-04-12",
    departureCity: "Lahore",
    seatsLeft: 6,
    status: "active",
    highlights: ["Attabad Lake", "Khunjerab Pass", "Baltit Fort"],
  },
  {
    id: "dubai-eid-2026",
    title: "Dubai Luxury Experience",
    region: "UAE",
    destination: "Dubai",
    durationDays: 5,
    startDateISO: "2026-04-20",
    endDateISO: "2026-04-24",
    departureCity: "Karachi",
    seatsLeft: 9,
    status: "active",
    highlights: ["Burj Khalifa", "Desert Safari", "Palm Jumeirah"],
  },
  {
    id: "turkey-summer-2026",
    title: "Turkey Cultural Journey",
    region: "Turkey",
    destination: "Istanbul • Cappadocia",
    durationDays: 7,
    startDateISO: "2026-05-10",
    endDateISO: "2026-05-16",
    departureCity: "Islamabad",
    seatsLeft: 4,
    status: "active",
    highlights: ["Hagia Sophia", "Bosphorus Cruise", "Hot Air Balloon"],
  },
  {
    id: "maldives-summer-2026",
    title: "Maldives Paradise",
    region: "Maldives",
    destination: "Malé • Resort Islands",
    durationDays: 6,
    startDateISO: "2026-05-25",
    endDateISO: "2026-05-30",
    departureCity: "Lahore",
    seatsLeft: 3,
    status: "active",
    highlights: ["Water Villa", "Snorkeling", "Sunset Cruise"],
  },
];

export const joiningCities = ["Lahore", "Karachi", "Islamabad", "Multan", "Peshawar"] as const;

export const packageTypes = ["Standard", "Deluxe", "Luxury", "Honeymoon", "Family"] as const;

export const placesToVisitOptions = [
  "City Tour",
  "Historical Sites",
  "Shopping",
  "Adventure Activities",
  "Boat/Desert Safari",
  "Museums",
  "Nature Spots",
] as const;

export const hotelsOptions = ["3-Star", "4-Star", "5-Star", "Resort", "Boutique Hotel"] as const;

export const vehiclesOptions = ["Sedan", "SUV", "Coaster", "Hiace", "Land Cruiser"] as const;
