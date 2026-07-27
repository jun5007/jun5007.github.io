(() => {
  const languageLinks = document.querySelectorAll("[data-language-link]");

  function updateLanguageLinks() {
    const hash = window.location.hash;
    languageLinks.forEach((link) => {
      const base = link.getAttribute("href").split("#")[0];
      link.setAttribute("href", `${base}${hash}`);
    });
  }

  updateLanguageLinks();
  window.addEventListener("hashchange", updateLanguageLinks);
})();
