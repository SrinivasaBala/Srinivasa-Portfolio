// 3D Premium Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("cinematic-loader");

  setTimeout(() => {
    if (loader) {
      loader.classList.add("hide");
    }
  }, 1900);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 110) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Parallax backgrounds
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelectorAll(".section-bg, .fuji-bg").forEach((bg) => {
    bg.style.transform = `translateY(${scrollY * 0.08}px) scale(1.08)`;
  });
});

// Floating cards mouse movement
document
  .querySelectorAll(".glass, .project-card, .skill-card, .tool")
  .forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = (x / rect.width - 0.5) * 10;
      const rotateX = (y / rect.height - 0.5) * -10;

      card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

// Active nav highlight
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 160;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
/* Luxury project fade-in / fade-out scroll animation */
const projectCards = document.querySelectorAll(".project-reveal");

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.classList.remove("hide-down");
      } else {
        entry.target.classList.remove("show");
        entry.target.classList.add("hide-down");
      }
    });
  },
  {
    threshold: 0.28,
  },
);

projectCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.12}s`;
  projectObserver.observe(card);
});

/* Smooth 3D mouse movement on project cards */
projectCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = (y / rect.height - 0.5) * -12;

    card.style.transform = `translateY(-18px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
