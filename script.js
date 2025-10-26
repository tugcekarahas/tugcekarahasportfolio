// Simple enhancements: theme toggle + current year + smooth scroll
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "light") root.classList.add("light");

  const btn = document.getElementById("themeToggle");
  function applyTheme(light) {
    root.classList.toggle("light", light);
    localStorage.setItem("theme", light ? "light" : "dark");
    if (btn) btn.setAttribute("aria-pressed", light ? "true" : "false");
  }
  if (btn) {
    btn.addEventListener("click", () => applyTheme(!root.classList.contains("light")));
  }

  // current year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // smooth scroll for internal anchors
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (t.tagName === "A" && t.getAttribute("href")?.startsWith("#")) {
      const id = t.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", "#" + id);
      }
    }
  });
})();
