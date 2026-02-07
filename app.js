(function () {
  const cfg = window.SITE_CONFIG || {};
  const getValue = (key) => {
    if (key === "year") return new Date().getFullYear();
    return cfg[key] == null ? "" : String(cfg[key]);
  };

  document.querySelectorAll("[data-config]").forEach((node) => {
    const key = node.getAttribute("data-config");
    const val = getValue(key);
    if (val) node.textContent = val;
  });

  document.querySelectorAll("[data-config-href]").forEach((node) => {
    const key = node.getAttribute("data-config-href");
    const val = getValue(key);
    if (val) node.setAttribute("href", val);
  });

  document.querySelectorAll("[data-config-mailto]").forEach((node) => {
    const key = node.getAttribute("data-config-mailto");
    const val = getValue(key);
    if (val) node.setAttribute("href", "mailto:" + val);
  });

  const email = getValue("contactEmail");
  const needsSetup = email.includes("replace-with-your-email");
  const banner = document.getElementById("setup-banner");
  if (banner) {
    banner.style.display = needsSetup ? "block" : "none";
  }
})();
