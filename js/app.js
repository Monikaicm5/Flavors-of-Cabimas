(function () {
  const R = window.RESTAURANT;
  const MENU = window.MENU;

  const money = (n) => "$" + n.toFixed(2);
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  // Fill in shared text and links from menu.js so they live in one place.
  document.querySelectorAll("[data-text]").forEach((el) => {
    el.textContent = R[el.dataset.text];
  });
  document.querySelectorAll("[data-link]").forEach((el) => {
    const key = el.dataset.link;
    el.href = key === "phone" ? "tel:" + R.phone : R.links[key];
  });
  document.getElementById("year").textContent = new Date().getFullYear();

  // Photos: set a path in menu.js (heroPhoto, or `photo` on a dish). Until then the logo stands in.
  const photo = (src, alt) =>
    src
      ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`
      : `<span class="photo-empty" aria-hidden="true"><img src="/assets/logo.svg" alt=""></span>`;
  document.querySelectorAll("[data-photo]").forEach((el) => {
    el.innerHTML = photo(R[el.dataset.photo], el.dataset.alt || "");
  });

  // Open / closed badge, using the restaurant's local time (Florida).
  (function openStatus() {
    const hour = Number(
      new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: false, timeZone: "America/New_York" }).format(new Date())
    ) % 24;
    const open = hour >= 11 && hour < 23;
    const el = document.getElementById("open-status");
    el.textContent = open ? "Open now · until 11 PM" : "Closed now · opens 11 AM";
    el.classList.toggle("is-closed", !open);
    document.getElementById("open-short").textContent = open ? "Open til 11 PM" : "Opens 11 AM";
  })();

  function itemRow(item) {
    return `<article class="item${item.photo ? " has-photo" : ""}">
      ${item.photo ? `<div class="item-photo">${photo(item.photo, item.name)}</div>` : ""}
      <div class="item-body">
        <div class="item-top">
          <h4>${esc(item.name)}</h4>
          <span class="price">${money(item.price)}</span>
        </div>
        ${item.desc ? `<p>${esc(item.desc)}</p>` : ""}
      </div>
    </article>`;
  }

  // Favorites row
  const favs = MENU.flatMap((c) => c.items.filter((i) => i.featured).map((i) => ({ ...i, cat: c.name })));
  document.getElementById("favorites").innerHTML = `
    <h3 class="fav-title">Favoritos de la casa</h3>
    <div class="fav-row">${favs
      .map(
        (i) => `<article class="fav">
          <div class="fav-photo">${photo(i.photo, i.name)}<span class="fav-cat">${esc(i.cat)}</span></div>
          <div class="fav-top">
            <h4>${esc(i.name)}</h4>
            <span class="price">${money(i.price)}</span>
          </div>
          ${i.desc ? `<p>${esc(i.desc)}</p>` : ""}
        </article>`
      )
      .join("")}</div>`;

  // Category chips + full menu
  const chips = document.getElementById("menu-chips");
  chips.innerHTML = MENU.map((c, n) => `<a href="#cat-${c.id}" class="chip${n ? "" : " active"}" data-cat="${c.id}">${esc(c.name)}</a>`).join("");

  const list = document.getElementById("menu-list");
  list.innerHTML = MENU.map(
    (c) => `<section class="category" id="cat-${c.id}" data-cat="${c.id}">
      <header>
        <h3>${esc(c.name)}</h3>
        ${c.blurb ? `<p>${esc(c.blurb)}</p>` : ""}
      </header>
      <div class="items">${c.items.map(itemRow).join("")}</div>
    </section>`
  ).join("");

  // Highlight the chip for the category in view.
  const chipEls = [...chips.querySelectorAll(".chip")];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        chipEls.forEach((c) => c.classList.toggle("active", c.dataset.cat === e.target.dataset.cat));
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  list.querySelectorAll(".category").forEach((s) => observer.observe(s));

  // Search
  const search = document.getElementById("menu-search");
  const empty = document.getElementById("menu-empty");
  const favWrap = document.getElementById("favorites");
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  search.addEventListener("input", () => {
    const q = norm(search.value.trim());
    let shown = 0;
    list.querySelectorAll(".category").forEach((sec) => {
      const catMatch = norm(sec.querySelector("h3").textContent).includes(q);
      let visible = 0;
      sec.querySelectorAll(".item").forEach((it) => {
        const hit = !q || catMatch || norm(it.textContent).includes(q);
        it.hidden = !hit;
        if (hit) visible++;
      });
      sec.hidden = visible === 0;
      shown += visible;
    });
    favWrap.hidden = !!q;
    empty.hidden = shown > 0;
  });

  // Installable app (works offline once visited)
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }
})();
