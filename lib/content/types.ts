export type TravelTourStatus = "active" | "upcoming" | "paused";

export type TravelTour = {
  id: string;
  slug: string;
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
  price: string;
  originalPrice: string;
  image: string;
  features: string[];
  rating: number;
  reviews: number;
  discount: string;
  isFeatured: boolean;
};

export type DestinationSummary = {
  id: string;
  slug: string;
  name: string;
  country: string;
  packages: string;
  image: string;
  description: string;
  startingFrom: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
  tour: string;
  date: string;
};

export type OwnerStat = {
  value: string;
  label: string;
  icon: "award" | "users" | "mapPin" | "calendar";
};

export type OwnerProfile = {
  name: string;
  title: string;
  bio: string;
  badge: string;
  image: string;
  stats: OwnerStat[];
};

export type SiteLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type TravelSiteSettings = {
  promoBarText: string;
  phone: string;
  email: string;
  supportHours: string;
  footerDescription: string;
  socialLinks: SocialLink[];
  legalLinks: SiteLink[];
};

export type TravelInquiry = {
  id: string;
  source: "contact" | "customize";
  fullName: string;
  email: string;
  phone: string;
  message: string;
  createdAtISO: string;
  status: "new" | "contacted" | "closed";
};

export type TravelFormOptions = {
  joiningCities: string[];
  packageTypes: string[];
  placesToVisitOptions: string[];
  hotelsOptions: string[];
  vehiclesOptions: string[];
};

export type TravelContentStore = {
  tours: TravelTour[];
  destinations: DestinationSummary[];
  testimonials: Testimonial[];
  ownerProfile: OwnerProfile;
  siteSettings: TravelSiteSettings;
  travelFormOptions: TravelFormOptions;
  inquiries: TravelInquiry[];
};
