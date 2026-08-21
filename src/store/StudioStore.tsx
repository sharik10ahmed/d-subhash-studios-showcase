import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  initialContact,
  initialFaqs,
  initialFilms,
  initialProjects,
  initialServices,
  initialStats,
  initialTestimonials,
  ADMIN_CREDENTIALS,
  type ContactDetails,
  type Faq,
  type Film,
  type Project,
  type Service,
  type Stats,
  type Testimonial,
} from "@/data/mockData";

/** In-session frontend state only. Nothing is persisted anywhere. */

type Toast = { id: number; message: string };

type StudioValue = {
  projects: Project[];
  services: Service[];
  films: Film[];
  testimonials: Testimonial[];
  faqs: Faq[];
  stats: Stats;
  contact: ContactDetails;
  saveProject: (item: Project) => void;
  deleteProject: (id: string) => void;
  saveService: (item: Service) => void;
  deleteService: (id: string) => void;
  saveFilm: (item: Film) => void;
  deleteFilm: (id: string) => void;
  saveTestimonial: (item: Testimonial) => void;
  deleteTestimonial: (id: string) => void;
  saveFaq: (item: Faq) => void;
  deleteFaq: (id: string) => void;
  setStats: (s: Stats) => void;
  setContact: (c: ContactDetails) => void;
  isAuthed: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  toasts: Toast[];
  toast: (message: string) => void;
};

const StudioContext = createContext<StudioValue | null>(null);

export const newId = () => Math.random().toString(36).slice(2, 10);

function upsert<T extends { id: string }>(list: T[], item: T): T[] {
  return list.some((x) => x.id === item.id)
    ? list.map((x) => (x.id === item.id ? item : x))
    : [...list, item];
}

export function StudioProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [services, setServices] = useState<Service[]>(initialServices);
  const [films, setFilms] = useState<Film[]>(initialFilms);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [faqs, setFaqs] = useState<Faq[]>(initialFaqs);
  const [stats, setStats] = useState<Stats>(initialStats);
  const [contact, setContact] = useState<ContactDetails>(initialContact);
  const [isAuthed, setIsAuthed] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, message }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2600);
  }, []);

  const value = useMemo<StudioValue>(
    () => ({
      projects,
      services,
      films,
      testimonials,
      faqs,
      stats,
      contact,
      saveProject: (i) => setProjects((l) => upsert(l, i)),
      deleteProject: (id) => setProjects((l) => l.filter((x) => x.id !== id)),
      saveService: (i) => setServices((l) => upsert(l, i)),
      deleteService: (id) => setServices((l) => l.filter((x) => x.id !== id)),
      saveFilm: (i) => setFilms((l) => upsert(l, i)),
      deleteFilm: (id) => setFilms((l) => l.filter((x) => x.id !== id)),
      saveTestimonial: (i) => setTestimonials((l) => upsert(l, i)),
      deleteTestimonial: (id) => setTestimonials((l) => l.filter((x) => x.id !== id)),
      saveFaq: (i) => setFaqs((l) => upsert(l, i)),
      deleteFaq: (id) => setFaqs((l) => l.filter((x) => x.id !== id)),
      setStats,
      setContact,
      isAuthed,
      login: (email, password) => {
        const ok =
          email.trim().toLowerCase() === ADMIN_CREDENTIALS.email &&
          password === ADMIN_CREDENTIALS.password;
        if (ok) setIsAuthed(true);
        return ok;
      },
      logout: () => setIsAuthed(false),
      toasts,
      toast,
    }),
    [projects, services, films, testimonials, faqs, stats, contact, isAuthed, toasts, toast],
  );

  return <StudioContext.Provider value={value}>{children}</StudioContext.Provider>;
}

export function useStudio() {
  const ctx = useContext(StudioContext);
  if (!ctx) throw new Error("useStudio must be used inside StudioProvider");
  return ctx;
}
