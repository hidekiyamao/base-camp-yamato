document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  const closeMenu = () => {
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "MENU";
  };

  menuButton.addEventListener("click", () => {
    const willOpen = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
    menuButton.setAttribute("aria-expanded", String(willOpen));
    menuButton.textContent = willOpen ? "CLOSE" : "MENU";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) closeMenu();
  });
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const modal = document.querySelector(".image-modal");
const modalImage = modal?.querySelector("img");
const closeButton = modal?.querySelector(".modal-close");

const closeModal = () => {
  if (!modal || !modalImage) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
  document.body.style.overflow = "";
};

document.querySelectorAll(".zoomable").forEach((button) => {
  button.addEventListener("click", () => {
    if (!modal || !modalImage) return;
    const source = button.dataset.image;
    if (!source) return;
    modalImage.src = source;
    modalImage.alt = button.querySelector("img")?.alt || "拡大画像";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

closeButton?.addEventListener("click", closeModal);
modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

// LINE公式URLが決まるまでは、ページ内の予約案内へ移動します。
const lineReserve = document.querySelector("#line-reserve");
if (lineReserve) {
  lineReserve.addEventListener("click", (event) => {
    const href = lineReserve.getAttribute("href");
    if (!href || href === "#") {
      event.preventDefault();
      alert("LINE公式アカウントのURL取得後に予約リンクを設定します。");
    }
  });
}
