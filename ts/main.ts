// =========================================
// MEBLE PREMIUM — MAIN TYPESCRIPT
// =========================================

// ---- Types ----

interface ProjectDetail {
  label: string;
  value: string;
}

interface Project {
  id: number;
  category: "kuchnia" | "szafa" | "garderoba";
  categoryLabel: string;
  title: string;
  desc: string;
  longDesc: string;
  tags: string[];
  details: ProjectDetail[];
  color: string;
}

// ---- Projects Data ----

const PROJECTS: Project[] = [
  {
    id: 1,
    category: "kuchnia",
    categoryLabel: "Kuchnia",
    title: "Kuchnia Klasyczna Biel",
    desc: "Elegancka kuchnia w stylu klasycznym z frontami lakierowanymi na biało i blatem z granitu.",
    longDesc:
      "Projekt zrealizowany dla rodziny z Warszawy. Kuchnia w stylu klasycznym z frontami lakierowanymi na biało (mat), blatem z czarnego granitu i uchwytami w złotym kolorze. Zastosowano systemy Blum Tandembox na szufladach oraz push-to-open na frontach bez uchwytów dolnych. Całość podświetlona taśmą LED.",
    tags: ["Lakier biały", "Granit", "Blum", "LED"],
    details: [
      { label: "Styl", value: "Klasyczny" },
      { label: "Materiał frontów", value: "Lakier mat" },
      { label: "Blat", value: "Granit czarny" },
      { label: "Czas realizacji", value: "6 tygodni" },
    ],
    color: "#2c2420",
  },
  {
    id: 2,
    category: "kuchnia",
    categoryLabel: "Kuchnia",
    title: "Kuchnia Nowoczesna Antracyt",
    desc: "Minimalistyczna kuchnia w kolorze antracytu z wyspą roboczą i oświetleniem nastrojowym.",
    longDesc:
      "Projekt kuchni otwartej na salon. Fronty w kolorze antracyt z efektem betonu. Wyspa robocza 240×90 cm z kamiennym blatem i podświetleniem LED pod spodem. Sprzęt AGD Siemens w zabudowie. System cichego zamykania drzwi i szuflad.",
    tags: ["Antracyt", "Beton", "Wyspa", "AGD Siemens"],
    details: [
      { label: "Styl", value: "Nowoczesny" },
      { label: "Kolor", value: "Antracyt / beton" },
      { label: "Wyspa", value: "240 × 90 cm" },
      { label: "Czas realizacji", value: "8 tygodni" },
    ],
    color: "#1a1e22",
  },
  {
    id: 3,
    category: "kuchnia",
    categoryLabel: "Kuchnia",
    title: "Kuchnia Skandynawska Dąb",
    desc: "Ciepła kuchnia w stylu skandynawskim z naturalnymi frontami fornirowanymi w kolorze dębu.",
    longDesc:
      "Projekt dla młodej pary w Krakowie. Fronty w fornirze dębowym szczotkowanym, blat z białego kwarcytu. Otwarta półka dekoracyjna z drewna litego. System organizacji szuflad Blum Legrabox. Ciche zamykanie na wszystkich elementach ruchomych.",
    tags: ["Fornir dąb", "Kwarcyt", "Skandynawski", "Blum Legrabox"],
    details: [
      { label: "Styl", value: "Skandynawski" },
      { label: "Materiał frontów", value: "Fornir dąb" },
      { label: "Blat", value: "Kwarcyt biały" },
      { label: "Czas realizacji", value: "7 tygodni" },
    ],
    color: "#2a1f10",
  },
  {
    id: 4,
    category: "szafa",
    categoryLabel: "Szafa",
    title: "Szafa Wnękowa Przesuwna",
    desc: "Szafa wnękowa 3-metrowa z przesuwnymi drzwiami z lustrami, z systemem organiz. wnętrza.",
    longDesc:
      "Szafa wnękowa do sypialni o długości 3 m i wysokości 2,4 m. Drzwi przesuwne z lustrami srebrno-szarymi. Wewnątrz system organizacji: drążki na wieszaki, półki na buty, szuflady z przegródkami. Cały korpus w kolorze białym mat, ościeżnice antracyt.",
    tags: ["Lustra", "Przesuwne", "System organiz.", "BW mat"],
    details: [
      { label: "Wymiary", value: "300 × 240 cm" },
      { label: "Drzwi", value: "Przesuwne z lustrem" },
      { label: "Wnętrze", value: "System modułowy" },
      { label: "Czas realizacji", value: "3 tygodnie" },
    ],
    color: "#1a1a24",
  },
  {
    id: 5,
    category: "szafa",
    categoryLabel: "Szafa",
    title: "Szafa Loft Czarne Fronty",
    desc: "Szafa w stylu loft z czarnymi matowymi frontami i metalowymi uchwytami.",
    longDesc:
      "Szafa na wymiar do pokoju w stylu industrialnym. Fronty lakierowane na czarno (mat), uchwyty stalowe szczotkowane. Wewnątrz 2 drążki pełnej długości, 6 szuflad z miękkim zamknięciem i 12 półek. Wysokość do sufitu 260 cm.",
    tags: ["Czarny mat", "Loft", "Industrial", "Na wymiar"],
    details: [
      { label: "Styl", value: "Loft / Industrial" },
      { label: "Kolor", value: "Czarny mat" },
      { label: "Wysokość", value: "260 cm (do sufitu)" },
      { label: "Czas realizacji", value: "4 tygodnie" },
    ],
    color: "#0f0f0f",
  },
  {
    id: 6,
    category: "garderoba",
    categoryLabel: "Garderoba",
    title: "Garderoba Luksusowa Walk-in",
    desc: "Przestronna garderoba z dedykowanym pomieszczeniem, wyspą centralną i podświetleniem.",
    longDesc:
      "Garderoba typu walk-in 12 m². Wyspa centralna z szufladami wykończona marmurem sztucznym. Oświetlenie LED wbudowane w każdą półkę. System szuflad z organiz. na biżuterię i zegarki. Fronty w białym połysku z uchwytami złotymi. Pełne lustro na ścianie.",
    tags: ["Walk-in", "Wyspa centralna", "LED", "Marmur"],
    details: [
      { label: "Powierzchnia", value: "12 m²" },
      { label: "Styl", value: "Glamour / Luksusowy" },
      { label: "Oświetlenie", value: "LED na każdej półce" },
      { label: "Czas realizacji", value: "10 tygodni" },
    ],
    color: "#1e1a2a",
  },
  {
    id: 7,
    category: "garderoba",
    categoryLabel: "Garderoba",
    title: "Garderoba Minimalistyczna",
    desc: "Otwarta garderoba w stylu minimalistycznym z systemem modułowym na metalowych stelażach.",
    longDesc:
      "Projekt garderoby otwartej (bez drzwi). Stelaże metalowe w kolorze czarnym, półki MDF lakierowany na biało. Drążki aluminiowe anodowane. System modułowy — możliwość łatwej rekonfiguracji. Podświetlenie paskiem LED w górnej części.",
    tags: ["Otwarta", "Minimalizm", "System modułowy", "Stelaż metal"],
    details: [
      { label: "Typ", value: "Otwarta / modułowa" },
      { label: "Stelaż", value: "Metal czarny" },
      { label: "Półki", value: "MDF biały lakier" },
      { label: "Czas realizacji", value: "2 tygodnie" },
    ],
    color: "#111118",
  },
  {
    id: 8,
    category: "kuchnia",
    categoryLabel: "Kuchnia",
    title: "Kuchnia Rustykalna Orzech",
    desc: "Kuchnia w stylu rustykalnym z frontami z naturalnego orzecha i blatem z dębu olejowanego.",
    longDesc:
      "Projekt inspirowany drewnem i naturą. Fronty z orzecha naturalnego frezowanego. Blat roboczy z dębu olejowanego na ciepło. Szafki dolne na nóżkach rustyk. Ceramiczna zlewozmywak farmerski. Uchwyty kutego żelaza.",
    tags: ["Orzech naturalny", "Dąb olejowany", "Rustyk", "Farmhouse"],
    details: [
      { label: "Styl", value: "Rustykalno-farmhouse" },
      { label: "Fronty", value: "Orzech naturalny" },
      { label: "Blat", value: "Dąb olejowany" },
      { label: "Czas realizacji", value: "9 tygodni" },
    ],
    color: "#1e1408",
  },
  {
    id: 9,
    category: "szafa",
    categoryLabel: "Szafa",
    title: "Szafa Zabudowa Skosu",
    desc: "Zabudowa szafy na poddaszu ze skosem dachowym — maksymalne wykorzystanie przestrzeni.",
    longDesc:
      "Niestandardowy projekt zabudowy pod skosem dachu. Drzwi uchylne dopasowane do kąta nachylenia. Wnętrze podzielone na strefę wiszącej odzieży sezonowej, półki i szuflady niskoprofilowe. Kolor: biel arktyczna, uchwyty minimalistyczne wciskane.",
    tags: ["Poddasze", "Skosy", "Na wymiar", "Biały"],
    details: [
      { label: "Typ", value: "Zabudowa skosów" },
      { label: "Drzwi", value: "Uchylne, skoś." },
      { label: "Kolor", value: "Biel arktyczna" },
      { label: "Czas realizacji", value: "5 tygodni" },
    ],
    color: "#18181e",
  },
];

// ---- DOM helpers ----

function qs<T extends Element>(sel: string, ctx: Element | Document = document): T {
  const el = ctx.querySelector<T>(sel);
  if (!el) throw new Error(`Element not found: ${sel}`);
  return el;
}

function qsa<T extends Element>(sel: string, ctx: Element | Document = document): T[] {
  return Array.from(ctx.querySelectorAll<T>(sel));
}

// ---- Navigation ----

function initNav(): void {
  const nav = qs<HTMLElement>("#nav");
  const hamburger = qs<HTMLButtonElement>("#hamburger");
  const menu = qs<HTMLElement>("#navMenu");
  const links = qsa<HTMLAnchorElement>(".nav__link");

  // Scroll effect
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    const open = hamburger.classList.toggle("open");
    menu.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  // Close on link click
  links.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      menu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  // Active link on scroll
  const sections = qsa<HTMLElement>("section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => {
            const href = l.getAttribute("href");
            l.classList.toggle("active", href === `#${e.target.id}`);
          });
        }
      });
    },
    { threshold: 0.3 }
  );
  sections.forEach((s) => observer.observe(s));
}

// ---- Reveal Animations ----

function initReveal(): void {
  const elements = qsa<HTMLElement>(".reveal-up, .reveal-left, .reveal-right");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );
  elements.forEach((el) => observer.observe(el));
}

// ---- Counter Animation ----

function initCounters(): void {
  const counters = qsa<HTMLElement>("[data-count]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        observer.unobserve(e.target);
        const target = parseInt((e.target as HTMLElement).dataset.count ?? "0", 10);
        const duration = 1800;
        const step = 16;
        const increment = target / (duration / step);
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          (e.target as HTMLElement).textContent = Math.floor(current).toString();
        }, step);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((el) => observer.observe(el));
}

// ---- Projects ----

function renderCard(project: Project): HTMLElement {
  const card = document.createElement("article");
  card.className = "project-card reveal-up";
  card.dataset.category = project.category;
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `Otwórz projekt: ${project.title}`);

  card.innerHTML = `
    <div class="project-card__image-wrap" style="background:${project.color}">
      <div class="project-card__image-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </div>
      <div class="project-card__overlay">
        <span class="project-card__view-btn">
          Zobacz projekt
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </div>
    <div class="project-card__body">
      <p class="project-card__category">${project.categoryLabel}</p>
      <h3 class="project-card__title">${project.title}</h3>
      <p class="project-card__desc">${project.desc}</p>
      <div class="project-card__tags">
        ${project.tags.map((t) => `<span class="project-card__tag">${t}</span>`).join("")}
      </div>
    </div>
  `;

  const openModal = () => showModal(project);
  card.addEventListener("click", openModal);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") openModal();
  });

  return card;
}

function initProjects(): void {
  const grid = qs<HTMLElement>("#projectsGrid");
  const filterBtns = qsa<HTMLButtonElement>(".filter-btn");

  // Render all cards
  PROJECTS.forEach((project, i) => {
    const card = renderCard(project);
    (card as HTMLElement).style.animationDelay = `${i * 0.07}s`;
    grid.appendChild(card);
  });

  // Observe for reveal
  initReveal();

  // Filter
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter ?? "all";
      filterCards(filter);
    });
  });
}

function filterCards(filter: string): void {
  const cards = qsa<HTMLElement>(".project-card");
  cards.forEach((card) => {
    const match = filter === "all" || card.dataset.category === filter;
    if (match) {
      card.style.display = "";
      requestAnimationFrame(() => card.classList.remove("filtering-out"));
    } else {
      card.classList.add("filtering-out");
      setTimeout(() => { card.style.display = "none"; }, 300);
    }
  });
}

// ---- Modal ----

let modalOpen = false;

function showModal(project: Project): void {
  const modal = qs<HTMLElement>("#projectModal");
  const modalTitle = qs<HTMLElement>("#modalTitle");
  const modalCategory = qs<HTMLElement>("#modalCategory");
  const modalDesc = qs<HTMLElement>("#modalDesc");
  const modalDetails = qs<HTMLElement>("#modalDetails");
  const modalImage = qs<HTMLImageElement>("#modalImage");

  modalTitle.textContent = project.title;
  modalCategory.textContent = project.categoryLabel;
  modalDesc.textContent = project.longDesc;
  modalImage.alt = project.title;
  modalImage.style.display = "none";

  // Details
  modalDetails.innerHTML = project.details
    .map(
      (d) => `
      <div class="modal__detail">
        <p class="modal__detail-label">${d.label}</p>
        <p class="modal__detail-value">${d.value}</p>
      </div>`
    )
    .join("");

  // Background color placeholder
  const imageWrap = qs<HTMLElement>(".modal__image-wrap", modal);
  imageWrap.style.background = project.color;
  imageWrap.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;height:100%;color:rgba(255,255,255,0.15);font-family:var(--font-sans);font-size:0.85rem;">
      [Zdjęcie: ${project.title}]
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  modalOpen = true;

  modal.querySelector<HTMLButtonElement>("#modalClose")?.focus();
}

function closeModal(): void {
  const modal = qs<HTMLElement>("#projectModal");
  modal.classList.remove("open");
  document.body.style.overflow = "";
  modalOpen = false;
}

function initModal(): void {
  const closeBtn = qs<HTMLButtonElement>("#modalClose");
  const backdrop = qs<HTMLElement>("#modalBackdrop");

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOpen) closeModal();
  });
}

// ---- Contact Form ----

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  projectType?: string;
  message?: string;
  consent?: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  const firstName = (data.get("firstName") as string).trim();
  const lastName = (data.get("lastName") as string).trim();
  const email = (data.get("email") as string).trim();
  const projectType = (data.get("projectType") as string).trim();
  const message = (data.get("message") as string).trim();
  const consent = data.get("consent");

  if (!firstName) errors.firstName = "Imię jest wymagane.";
  if (!lastName) errors.lastName = "Nazwisko jest wymagane.";

  if (!email) {
    errors.email = "Email jest wymagany.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Podaj poprawny adres email.";
  }

  if (!projectType) errors.projectType = "Wybierz rodzaj projektu.";

  if (!message) {
    errors.message = "Wiadomość jest wymagana.";
  } else if (message.length < 20) {
    errors.message = "Wiadomość powinna mieć co najmniej 20 znaków.";
  }

  if (!consent) errors.consent = "Zgoda jest wymagana.";

  return errors;
}

function setFieldError(id: string, message: string): void {
  const el = document.getElementById(id);
  const errEl = document.getElementById(`${id}Error`);
  el?.classList.toggle("error", !!message);
  if (errEl) errEl.textContent = message ?? "";
}

function clearErrors(): void {
  ["firstName", "lastName", "email", "projectType", "message", "consent"].forEach(
    (id) => setFieldError(id, "")
  );
}

function initContactForm(): void {
  const form = qs<HTMLFormElement>("#contactForm");
  const submitBtn = qs<HTMLButtonElement>("#submitBtn");
  const btnText = qs<HTMLElement>(".btn__text", submitBtn);
  const btnLoader = qs<HTMLElement>(".btn__loader", submitBtn);
  const successBox = qs<HTMLElement>("#formSuccess");

  // Real-time validation
  const inputs = qsa<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
    "input, textarea, select",
    form
  );
  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      const fd = new FormData(form);
      const errors = validateForm(fd);
      const name = input.name as keyof FormErrors;
      setFieldError(name, errors[name] ?? "");

      if (name === "consent") {
        setFieldError("consent", errors.consent ?? "");
      }
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearErrors();

    const formData = new FormData(form);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([k, v]) => setFieldError(k, v ?? ""));
      // Focus first errored field
      const firstErr = Object.keys(errors)[0];
      document.getElementById(firstErr)?.focus();
      return;
    }

    // Simulate sending
    submitBtn.disabled = true;
    btnText.hidden = true;
    btnLoader.hidden = false;

    await delay(1500);

    submitBtn.disabled = false;
    btnText.hidden = false;
    btnLoader.hidden = true;
    form.reset();
    successBox.hidden = false;
    successBox.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // Hide success after 7s
    setTimeout(() => { successBox.hidden = true; }, 7000);
  });
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ---- Smooth scroll for anchor links ----

function initSmoothScroll(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ---- Init ----

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initReveal();
  initCounters();
  initProjects();
  initModal();
  initContactForm();
  initSmoothScroll();
});
