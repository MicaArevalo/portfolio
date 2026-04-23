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
   TYPING ANIMATION
   ============================================ */
const ROLES = [
  'Senior Software Engineer',
  'Backend Architect',
  '.NET & C# Specialist',
  'Fintech & Banking Dev',
  'AI-Augmented Engineer',
];

let rIdx = 0, cIdx = 0, deleting = false;
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

  setTimeout(type, delay);
}

type();

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
