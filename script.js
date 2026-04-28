/* ============================================
   NAV — scroll glass effect + mobile toggle
   ============================================ */
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ============================================
   TRANSLATIONS
   ============================================ */
const translations = {
  en: {
    roles: [
      'Senior Software Engineer',
      'Backend Architect',
      '.NET & C# Specialist',
      'Fintech & Banking Dev',
      'AI-Augmented Engineer',
    ],
    'nav.about':      'About',
    'nav.skills':     'Skills',
    'nav.experience': 'Experience',
    'nav.contact':    'Contact',

    'hero.tagline':        '9+ years building the scalable backend systems for<br>banking &amp; fintech — one API at a time.',
    'hero.viewExperience': 'View Experience',
    'hero.getInTouch':     'Get in Touch',
    'hero.years':          'Years',
    'hero.companies':      'Companies',
    'hero.technologies':   'Technologies',

    'about.tag':           '01 · About',
    'about.title':         'Who I Am',
    'about.p1':            'Senior Software Engineer with over <strong>9 years of experience</strong> designing, developing, and optimizing scalable backend systems across the <strong>banking and fintech</strong> industries.',
    'about.p2':            'Specialized in software architecture, clean code practices, and performance improvement. Currently part of the <strong>Architecture Team at Banco Galicia</strong>, driving API optimization, refactoring initiatives, and the adoption of AI tools to enhance developer efficiency.',
    'about.p3':            'Passionate about continuous improvement, automation, and modern engineering practices — including <strong>prompt engineering</strong> and integrating AI into development workflows.',
    'about.highlight1':    '.NET &amp; C# Specialist',
    'about.highlight2':    'Backend Architecture',
    'about.highlight3':    'Banking &amp; Fintech Systems',
    'about.highlight4':    'AI-Augmented Development',
    'about.locationLabel': 'Location',
    'about.locationValue': 'Argentina',
    'about.roleLabel':     'Current Role',
    'about.emailLabel':    'Email',
    'about.phoneLabel':    'Phone',

    'skills.tag':          '02 · Skills',
    'skills.title':        'Technical Expertise',
    'skills.databases':    'Databases',
    'skills.architecture': 'Architecture',
    'skills.messaging':    'Messaging &amp; Integration',
    'skills.ai':           'AI &amp; Automation',

    'exp.tag':       '03 · Experience',
    'exp.title':     'Work History',
    'exp.job1.period': 'May 2024 – Present',
    'exp.job1.desc':   'Implementing API optimization and architectural improvements across the engineering org. Championing the adoption of AI tools — GitHub Copilot and prompt files — to boost developer efficiency and code quality.',
    'exp.job1.li1':    'Developed APIs for international banking transactions integrated with SWIFT',
    'exp.job1.li2':    'Implemented automatic reconciliation systems for banking transactions',
    'exp.job1.li3':    'Integrated AI-assisted workflows with GitHub Copilot and structured prompt files',
    'exp.job2.period': 'Feb 2023 – May 2024',
    'exp.job2.desc':   'Built payment integrations for LATAM markets at a leading online payment processor offering PAYIN and PAYOUT solutions across multiple countries.',
    'exp.job2.li1':    'Integrated Infinia (Uruguay/Argentina), Movii (Colombia), Yape (Peru)',
    'exp.job2.li2':    'Implemented Pago Fácil (Argentina) and PSE ACH (Colombia) payment methods',
    'exp.job3.period': 'Feb 2022 – Feb 2023',
    'exp.job3.desc':   "Developed critical banking infrastructure for Argentina's leading private bank, handling international financial operations at scale.",
    'exp.job3.li1':    'Built APIs for international banking transactions and SWIFT operations',
    'exp.job3.li2':    'Implemented automatic reconciliation systems for banking transactions',
    'exp.job4.period': 'Apr 2021 – Feb 2022',
    'exp.job4.desc':   'Contributed to marketplace platform development at a global software engineering company, building complex distributed systems with modern messaging patterns.',
    'exp.job4.li1':    'Developed APIs for a marketplace application with chatbot integration',
    'exp.job4.li2':    'Implemented microservices communication via gRPC and Azure Service Bus',
    'exp.job5.period': 'Jan 2019 – Mar 2021',
    'exp.job5.desc':   'Delivered financial software solutions for major international banking clients at a consulting firm specializing in fintech.',
    'exp.job5.li1':    'Built APIs and batch processes for debt recovery: Itaú, BBVA, Forum Chile, ICBC',
    'exp.job5.li2':    'Developed reporting systems and financial analytics tooling',
    'exp.job6.period': 'May 2018 – Jan 2019',
    'exp.job6.desc':   'Built internal tools for a company providing commercial and financial information analytics.',
    'exp.job6.li1':    'Developed frontend and backend features for an internal CRM system',
    'exp.job7.period': 'Nov 2016 – Apr 2018',
    'exp.job7.desc':   'Started my professional career building enterprise intranet and SharePoint solutions for major clients across multiple industries.',
    'exp.job7.li1':    'Developed SharePoint solutions for AVON, EDENOR, YACYRETÁ, and Sofrecom France',

    'contact.tag':           '04 · Contact',
    'contact.title':         "Let's Connect",
    'contact.intro':         "I'm always open to discussing new opportunities, architectural challenges, or simply connecting with people in IT. Feel free to reach out!",
    'contact.emailLabel':    'Email',
    'contact.locationLabel': 'Location',
    'contact.locationValue': 'Argentina · Remote-ready',

    'footer.builtBy': 'Designed &amp; built by',
  },

  es: {
    roles: [
      'Ingeniera de Software Senior',
      'Arquitecta Backend',
      'Especialista en .NET & C#',
      'Dev Fintech y Banca',
      'Ingeniera con IA',
    ],
    'nav.about':      'Sobre mí',
    'nav.skills':     'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.contact':    'Contacto',

    'hero.tagline':        '9+ años construyendo sistemas backend escalables para<br>banca y fintech — una API a la vez.',
    'hero.viewExperience': 'Ver Experiencia',
    'hero.getInTouch':     'Contáctame',
    'hero.years':          'Años',
    'hero.companies':      'Empresas',
    'hero.technologies':   'Tecnologías',

    'about.tag':           '01 · Sobre mí',
    'about.title':         'Quién Soy',
    'about.p1':            'Ingeniera de Software Senior con más de <strong>9 años de experiencia</strong> diseñando, desarrollando y optimizando sistemas backend escalables en las industrias de <strong>banca y fintech</strong>.',
    'about.p2':            'Especializada en arquitectura de software, buenas prácticas de código y mejora de performance. Actualmente en el <strong>Equipo de Arquitectura de Banco Galicia</strong>, liderando optimización de APIs, iniciativas de refactoring y adopción de herramientas de IA para mejorar la eficiencia del equipo.',
    'about.p3':            'Apasionada por la mejora continua, la automatización y las prácticas modernas de ingeniería — incluyendo <strong>prompt engineering</strong> e integración de IA en flujos de desarrollo.',
    'about.highlight1':    'Especialista en .NET &amp; C#',
    'about.highlight2':    'Arquitectura Backend',
    'about.highlight3':    'Sistemas Bancarios y Fintech',
    'about.highlight4':    'Desarrollo Potenciado con IA',
    'about.locationLabel': 'Ubicación',
    'about.locationValue': 'Argentina',
    'about.roleLabel':     'Rol Actual',
    'about.emailLabel':    'Correo',
    'about.phoneLabel':    'Teléfono',

    'skills.tag':          '02 · Habilidades',
    'skills.title':        'Habilidades Técnicas',
    'skills.databases':    'Bases de Datos',
    'skills.architecture': 'Arquitectura',
    'skills.messaging':    'Mensajería e Integración',
    'skills.ai':           'IA y Automatización',

    'exp.tag':       '03 · Experiencia',
    'exp.title':     'Historial Laboral',
    'exp.job1.period': 'Mayo 2024 – Presente',
    'exp.job1.desc':   'Implementando optimización de APIs y mejoras arquitectónicas en toda la organización. Impulsando la adopción de herramientas de IA — GitHub Copilot y archivos de prompts — para mejorar la eficiencia del equipo y la calidad del código.',
    'exp.job1.li1':    'Desarrollo de APIs para transacciones bancarias internacionales integradas con SWIFT',
    'exp.job1.li2':    'Implementación de sistemas de conciliación automática para transacciones bancarias',
    'exp.job1.li3':    'Integración de flujos asistidos por IA con GitHub Copilot y archivos de prompts estructurados',
    'exp.job2.period': 'Feb 2023 – Mayo 2024',
    'exp.job2.desc':   'Desarrollo de integraciones de pago para mercados de LATAM en un procesador de pagos online líder, con soluciones PAYIN y PAYOUT en múltiples países.',
    'exp.job2.li1':    'Integración de Infinia (Uruguay/Argentina), Movii (Colombia), Yape (Perú)',
    'exp.job2.li2':    'Implementación de métodos de pago Pago Fácil (Argentina) y PSE ACH (Colombia)',
    'exp.job3.period': 'Feb 2022 – Feb 2023',
    'exp.job3.desc':   'Desarrollo de infraestructura bancaria crítica para el banco privado líder de Argentina, manejando operaciones financieras internacionales a escala.',
    'exp.job3.li1':    'Desarrollo de APIs para transacciones bancarias internacionales y operaciones SWIFT',
    'exp.job3.li2':    'Implementación de sistemas de conciliación automática para transacciones bancarias',
    'exp.job4.period': 'Abr 2021 – Feb 2022',
    'exp.job4.desc':   'Desarrollo de una plataforma marketplace en una empresa global de ingeniería de software, construyendo sistemas distribuidos complejos con patrones modernos de mensajería.',
    'exp.job4.li1':    'Desarrollo de APIs para una aplicación marketplace con integración de chatbot',
    'exp.job4.li2':    'Implementación de comunicación entre microservicios mediante gRPC y Azure Service Bus',
    'exp.job5.period': 'Ene 2019 – Mar 2021',
    'exp.job5.desc':   'Entrega de soluciones de software financiero para grandes clientes bancarios internacionales en una consultora especializada en fintech.',
    'exp.job5.li1':    'Desarrollo de APIs y procesos batch para recupero de deuda: Itaú, BBVA, Forum Chile, ICBC',
    'exp.job5.li2':    'Desarrollo de sistemas de reportes y herramientas de analítica financiera',
    'exp.job6.period': 'Mayo 2018 – Ene 2019',
    'exp.job6.desc':   'Desarrollo de herramientas internas para una empresa de analítica de información comercial y financiera.',
    'exp.job6.li1':    'Desarrollo de funcionalidades frontend y backend para un sistema CRM interno',
    'exp.job7.period': 'Nov 2016 – Abr 2018',
    'exp.job7.desc':   'Inicio de mi carrera profesional construyendo soluciones de intranet corporativa y SharePoint para grandes clientes de múltiples industrias.',
    'exp.job7.li1':    'Desarrollo de soluciones SharePoint para AVON, EDENOR, YACYRETÁ y Sofrecom France',

    'contact.tag':           '04 · Contacto',
    'contact.title':         'Conectemos',
    'contact.intro':         '¡Siempre estoy abierta a discutir nuevas oportunidades, desafíos arquitectónicos o simplemente conectar con personas del mundo IT. No dudes en escribirme!',
    'contact.emailLabel':    'Correo',
    'contact.locationLabel': 'Ubicación',
    'contact.locationValue': 'Argentina',

    'footer.builtBy': 'Diseñado y construido por',
  },
};

/* ============================================
   LANGUAGE TOGGLE
   ============================================ */
let currentLang = localStorage.getItem('lang') || 'en';

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key in t) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  document.getElementById('langToggle').textContent = lang === 'en' ? 'ES' : 'EN';
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  ROLES = [...translations[lang].roles];
  clearTimeout(typingTimeout);
  rIdx = 0; cIdx = 0; deleting = false;
  typedEl.textContent = '';
  type();
  applyTranslations(lang);
}

document.getElementById('langToggle').addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'es' : 'en');
});

/* ============================================
   TYPING ANIMATION
   ============================================ */
let ROLES = [...translations[currentLang].roles];
let rIdx = 0, cIdx = 0, deleting = false;
let typingTimeout;
const typedEl = document.getElementById('typedRole');

function type() {
  const word = ROLES[rIdx];

  if (deleting) {
    typedEl.textContent = word.slice(0, --cIdx);
  } else {
    typedEl.textContent = word.slice(0, ++cIdx);
  }

  let delay = deleting ? 45 : 85;

  if (!deleting && cIdx === word.length) {
    delay = 2200;
    deleting = true;
  } else if (deleting && cIdx === 0) {
    deleting = false;
    rIdx = (rIdx + 1) % ROLES.length;
    delay = 350;
  }

  typingTimeout = setTimeout(type, delay);
}

/* ============================================
   PARTICLE CANVAS
   ============================================ */
const canvas = document.getElementById('heroCanvas');
const ctx    = canvas.getContext('2d');

let W, H, particles = [];
let mouse = { x: -9999, y: -9999 };

function resize() {
  W = canvas.width  = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
}

function initParticles() {
  particles = [];
  const count = Math.min(Math.floor((W * H) / 11000), 90);
  for (let i = 0; i < count; i++) {
    particles.push({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - .5) * .45,
      vy: (Math.random() - .5) * .45,
      r:  Math.random() * 1.4 + .5,
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, W, H);

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];

    /* gentle mouse repulsion */
    const dx = p.x - mouse.x;
    const dy = p.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 100) {
      const force = (100 - dist) / 100 * .6;
      p.vx += (dx / dist) * force;
      p.vy += (dy / dist) * force;
    }

    /* speed cap */
    const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
    if (speed > 1.8) { p.vx *= 1.8 / speed; p.vy *= 1.8 / speed; }

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x = W;
    if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H;
    if (p.y > H) p.y = 0;

    /* dot */
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(100,255,218,.5)';
    ctx.fill();

    /* connections */
    for (let j = i + 1; j < particles.length; j++) {
      const q   = particles[j];
      const ddx = p.x - q.x;
      const ddy = p.y - q.y;
      const d   = Math.sqrt(ddx * ddx + ddy * ddy);
      if (d < 130) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(100,255,218,${.18 * (1 - d / 130)})`;
        ctx.lineWidth = .6;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawParticles);
}

window.addEventListener('resize', () => {
  resize();
  initParticles();
}, { passive: true });

canvas.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
}, { passive: true });

canvas.addEventListener('mouseleave', () => {
  mouse.x = -9999;
  mouse.y = -9999;
});

resize();
initParticles();
drawParticles();

/* ============================================
   SCROLL REVEAL  (IntersectionObserver)
   ============================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-reveal]').forEach(el => {
  revealObserver.observe(el);
});

/* ============================================
   ACTIVE NAV LINK on scroll
   ============================================ */
const sections = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => navObserver.observe(s));

/* ============================================
   SMOOTH SCROLL (fallback for older browsers)
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ============================================
   INIT — apply saved language and start typing
   ============================================ */
applyTranslations(currentLang);
type();
