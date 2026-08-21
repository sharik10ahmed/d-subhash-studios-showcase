import { img } from "./images";

/* ------------------------------------------------------------------ *
 * MOCK / DEMO DATA — frontend only. No database, no backend.
 * Everything here is the initial seed for the admin-editable state.
 * ------------------------------------------------------------------ */

/** Mock admin credentials — change these two values to change the login. */
export const ADMIN_CREDENTIALS = {
  email: "admin@dsubhashstudios.com",
  password: "admin123",
};

export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type Film = {
  id: string;
  title: string;
  client: string;
  location: string;
  category: string;
  duration: string;
  thumbnail: string;
  synopsis: string;
};

export type Testimonial = {
  id: string;
  name: string;
  event: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
};

export type Faq = { id: string; question: string; answer: string };

export type Stats = {
  events: string;
  weddings: string;
  commercial: string;
  experience: string;
};

export type ContactDetails = {
  business: string;
  owner: string;
  phone: string;
  email: string;
  address: string;
};

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Weddings",
  "Candid",
  "Pre-Wedding",
  "Events",
  "Commercial",
  "Advertisement Films",
];

export const initialProjects: Project[] = [
  {
    id: "p1",
    title: "Aarav & Ananya — Royal Wedding",
    category: "Weddings",
    location: "Pune, Maharashtra",
    description:
      "A grand ballroom wedding photographed across three days of rituals, colour and family celebration.",
    image: img.pfRoyalWedding,
  },
  {
    id: "p2",
    title: "Riya & Omkar — Sunset Pre-Wedding",
    category: "Pre-Wedding",
    location: "Panhala, Kolhapur",
    description:
      "A quiet lakeside session shot entirely in the last forty minutes of natural light.",
    image: img.pfSunsetPrewedding,
  },
  {
    id: "p3",
    title: "Elegant Maharashtrian Wedding",
    category: "Weddings",
    location: "Gadhinglaj, Maharashtra",
    description:
      "Traditional nauvari, pheta and mundavalya — classic portraiture with a modern editorial finish.",
    image: img.pfMaharashtrian,
  },
  {
    id: "p4",
    title: "The Gadhinglaj Celebration",
    category: "Events",
    location: "Gadhinglaj, Maharashtra",
    description:
      "A community festival covered end to end, from the first lamp to the last dance.",
    image: img.pfCelebration,
  },
  {
    id: "p5",
    title: "Brand Story — Local Artisan",
    category: "Commercial",
    location: "Kolhapur, Maharashtra",
    description:
      "A product and craft story built around the hands that make it, shot with a single hard light.",
    image: img.pfArtisan,
  },
  {
    id: "p6",
    title: "Corporate Annual Celebration",
    category: "Events",
    location: "Belgaum, Karnataka",
    description:
      "Full stage, award and audience coverage delivered as a same-week highlight set.",
    image: img.pfCorporate,
  },
  {
    id: "p7",
    title: "Aaji's Blessing — Candid Frames",
    category: "Candid",
    location: "Ajara, Maharashtra",
    description:
      "An unposed monochrome series following the family through the vidaai morning.",
    image: img.pfCandidBlessing,
  },
  {
    id: "p8",
    title: "Suvarna Jewellers — Festive Campaign",
    category: "Advertisement Films",
    location: "Nipani, Karnataka",
    description:
      "A festive jewellery campaign combining stills and a thirty-second broadcast cut.",
    image: img.pfAdfilmJewel,
  },
];

export const initialServices: Service[] = [
  {
    id: "s1",
    title: "Wedding Photography",
    description:
      "Authentic wedding moments, rituals, emotions, family portraits, and artistic compositions.",
    image: img.svcWedding,
  },
  {
    id: "s2",
    title: "Candid Photography",
    description:
      "Natural, emotional, spontaneous moments captured with a cinematic eye.",
    image: img.svcCandid,
  },
  {
    id: "s3",
    title: "Wedding Cinematography",
    description:
      "Cinematic wedding films combining emotional storytelling, music, movement, and beautifully composed visuals.",
    image: img.svcCinema,
  },
  {
    id: "s4",
    title: "Pre-Wedding Photography",
    description:
      "Creative pre-wedding sessions with customized concepts, locations, and storytelling.",
    image: img.svcPrewedding,
  },
  {
    id: "s5",
    title: "Event Coverage",
    description:
      "Professional photography and cinematography for celebrations, corporate events, cultural programs, and special occasions.",
    image: img.svcEvent,
  },
  {
    id: "s6",
    title: "Advertisement Filmmaking",
    description:
      "Professional commercial photography and video production for brands, products, businesses, and promotional campaigns.",
    image: img.svcAdfilm,
  },
  {
    id: "s7",
    title: "Commercial Photography",
    description:
      "High-quality visual content for businesses, products, brands, and marketing campaigns.",
    image: img.svcCommercial,
  },
  {
    id: "s8",
    title: "Customized Visual Media",
    description:
      "Customized photography and filmmaking solutions according to individual or commercial requirements.",
    image: img.svcCustom,
  },
];

export const initialFilms: Film[] = [
  {
    id: "f1",
    title: "The Royal Wedding Film",
    client: "Aarav & Ananya",
    location: "Pune",
    category: "Wedding Film",
    duration: "12:40",
    thumbnail: img.filmRoyal,
    synopsis:
      "Three days of ceremony distilled into a single cinematic story — the walk, the vows, the tears and the celebration that followed.",
  },
  {
    id: "f2",
    title: "A Story Beneath The Sunset",
    client: "Riya & Omkar",
    location: "Kolhapur",
    category: "Pre-Wedding Film",
    duration: "04:18",
    thumbnail: img.filmSunset,
    synopsis:
      "A short pre-wedding film shot across one evening on the hills, carried entirely by natural light and silence.",
  },
  {
    id: "f3",
    title: "Brand Stories — Local Heritage",
    client: "Commercial Film",
    location: "Ichalkaranji",
    category: "Advertisement Film",
    duration: "02:05",
    thumbnail: img.filmHeritage,
    synopsis:
      "A handloom brand film following a single thread from the loom to the finished weave.",
  },
  {
    id: "f4",
    title: "Haldi — Colours of Morning",
    client: "Sanika & Pratik",
    location: "Gadhinglaj",
    category: "Wedding Film",
    duration: "06:52",
    thumbnail: img.filmHaldi,
    synopsis:
      "The loudest, warmest morning of the wedding week, captured handheld and unscripted.",
  },
];

export const initialTestimonials: Testimonial[] = [
  {
    id: "r1",
    name: "Ananya Deshpande",
    event: "Wedding Photography & Film",
    location: "Pune",
    rating: 5,
    review:
      "The team captured every emotion beautifully. The wedding film feels like watching our story all over again.",
    avatar: img.t1,
  },
  {
    id: "r2",
    name: "Omkar Patil",
    event: "Pre-Wedding Shoot",
    location: "Kolhapur",
    rating: 5,
    review:
      "They planned the entire concept with us, location and all. The photographs look like frames from a film.",
    avatar: img.t2,
  },
  {
    id: "r3",
    name: "Sneha Kulkarni",
    event: "Corporate Event Coverage",
    location: "Belgaum",
    rating: 5,
    review:
      "Extremely professional and calm through a very long event day. The delivery was quick and beautifully curated.",
    avatar: img.t3,
  },
  {
    id: "r4",
    name: "Pratik Jadhav",
    event: "Advertisement Film",
    location: "Nipani",
    rating: 5,
    review:
      "Our product campaign finally looks premium. The lighting, the grade, the edit — everything felt considered.",
    avatar: img.t4,
  },
];

export const initialFaqs: Faq[] = [
  {
    id: "q1",
    question: "What photography packages do you offer?",
    answer:
      "We offer wedding, candid, pre-wedding, event, commercial and advertisement packages. Each package is quoted after a short consultation, based on the number of days, locations and deliverables you need.",
  },
  {
    id: "q2",
    question: "Do you provide both photography and cinematography?",
    answer:
      "Yes. Most of our clients book a combined team so that stills and film are covered by one crew working to a single visual plan.",
  },
  {
    id: "q3",
    question: "Do you cover weddings outside Gadhinglaj?",
    answer:
      "We regularly travel across Maharashtra and Karnataka, including Kolhapur, Pune, Belgaum and destination venues. Travel and stay are added to the quote.",
  },
  {
    id: "q4",
    question: "Do you offer pre-wedding shoots?",
    answer:
      "Yes. Pre-wedding sessions are planned around a concept, a location and a time of day, and can be booked separately or as part of a wedding package.",
  },
  {
    id: "q5",
    question: "How early should we book our wedding date?",
    answer:
      "We recommend booking three to six months ahead, and earlier for peak season dates, since we take a limited number of weddings each month.",
  },
  {
    id: "q6",
    question: "Do you provide customized photography packages?",
    answer:
      "Absolutely. Coverage hours, crew size, album type and film length can all be adjusted to your requirement and budget.",
  },
  {
    id: "q7",
    question: "Do you cover corporate and commercial projects?",
    answer:
      "Yes — product shoots, brand films, corporate events, cultural programmes and promotional campaigns are a significant part of our work.",
  },
  {
    id: "q8",
    question: "How long does it take to receive the final photos and films?",
    answer:
      "Curated highlights are shared within 7 to 10 days. The complete edited gallery takes 3 to 4 weeks, and cinematic films 4 to 6 weeks depending on length.",
  },
];

export const initialStats: Stats = {
  events: "500+",
  weddings: "250+",
  commercial: "100+",
  experience: "10+",
};

export const initialContact: ContactDetails = {
  business: "D Subhash Studios",
  owner: "Subhash Dundappa Chougule",
  phone: "7776998123",
  email: "support@dsubhashstudios.com",
  address: "Khanagave Nagar Kadgaon Road, Gadhinglaj, Maharashtra 416502",
};

export const featuredWork = {
  eyebrow: "Featured Story",
  title: "A Celebration of Love, Tradition & Emotion",
  location: "Gadhinglaj, Maharashtra",
  type: "Wedding Photography & Cinematography",
  story:
    "A night baraat through the old town, fireworks over the crossroads and a family that never stopped dancing. We covered this celebration with two photographers and a two-camera film crew, shooting almost entirely in available light to keep the warmth of the street intact.",
  image: img.featuredStory,
};

export const whyChooseUs = [
  {
    mark: "01",
    title: "Authentic Storytelling",
    text: "We photograph what actually happens, not a rehearsed version of it.",
  },
  {
    mark: "02",
    title: "Cinematic Visuals",
    text: "Composition, movement and colour treated with a filmmaker's discipline.",
  },
  {
    mark: "03",
    title: "Professional Production",
    text: "Planned crews, backup gear and a reliable post-production pipeline.",
  },
  {
    mark: "04",
    title: "Attention To Detail",
    text: "The jewellery, the invitation, the hands, the light through the doorway.",
  },
  {
    mark: "05",
    title: "Personalized Concepts",
    text: "Every shoot begins with your story, not with a template.",
  },
  {
    mark: "06",
    title: "Reliable Event Coverage",
    text: "On time, prepared, and unobtrusive from the first ritual to the last frame.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Connect",
    text: "Understand the client's vision, event, and expectations.",
  },
  {
    step: "02",
    title: "Plan",
    text: "Create the photography and cinematography concept and shoot plan.",
  },
  {
    step: "03",
    title: "Capture",
    text: "Capture authentic emotions, details, people, and moments.",
  },
  {
    step: "04",
    title: "Deliver",
    text: "Professionally curate and deliver the final visual memories.",
  },
];

export const EVENT_TYPES = [
  "Wedding Photography",
  "Wedding Cinematography",
  "Pre-Wedding Shoot",
  "Candid Photography",
  "Event Coverage",
  "Commercial Shoot",
  "Advertisement Film",
  "Other",
];
