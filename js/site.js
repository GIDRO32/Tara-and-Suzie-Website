/* =====================================================================
   Tara and Suzie — site behaviour
   Language is carried in the URL (?lang=ukrainian) so links stay
   shareable and nothing is stored on the reader's machine.
   All copy comes from data/i18n.js.
   ===================================================================== */

(function () {
  "use strict";

  var LANGS = {
    english:   { code: "en", short: "EN" },
    ukrainian: { code: "uk", short: "UA" }
  };

  function currentLang() {
    var q = new URLSearchParams(window.location.search).get("lang");
    return LANGS[q] ? q : "english";
  }

  var lang  = currentLang();
  var comic = window.COMIC || { folders: {}, chapters: [] };
  var dict  = (window.I18N && window.I18N[lang]) || (window.I18N && window.I18N.english) || {};

  function t(key) {
    return dict[key] !== undefined ? dict[key] : "";
  }

  /* Slavic-style plurals: 1 сторінка / 2–4 сторінки / 5+ сторінок.
     English forms just repeat, so the same call works for both. */
  function plural(n, forms) {
    if (!forms || !forms.length) return "";
    if (lang === "english") return n === 1 ? forms[0] : forms[1];
    var d = n % 10, h = n % 100;
    if (d === 1 && h !== 11) return forms[0];
    if (d >= 2 && d <= 4 && (h < 12 || h > 14)) return forms[1];
    return forms[2];
  }

  /* ---- swap every marked string on the page ---- */
  function translate() {
    document.documentElement.lang = LANGS[lang].code;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v === undefined) return;
      el.innerHTML = v;
      if (el.hasAttribute("data-text")) el.setAttribute("data-text", el.textContent);
    });

    var body = document.body;
    if (body.dataset.title) document.title = t(body.dataset.title);
    var desc = document.querySelector('meta[name="description"]');
    if (desc && body.dataset.meta) desc.setAttribute("content", t(body.dataset.meta));

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });

    if (lang !== "english") {
      document.querySelectorAll("[data-logo]").forEach(function (img) {
        img.src = "images/logo-ua.webp";
      });
    }

    var reader = document.querySelector("[data-reader]");
    if (reader) reader.setAttribute("aria-label", t("reader.label"));
  }

  /* ---- keep the chosen language when moving between pages ---- */
  function wireLanguage() {
    document.querySelectorAll("[data-lang-link]").forEach(function (a) {
      var target = a.getAttribute("data-lang-link");
      var file = window.location.pathname.split("/").pop() || "index.html";
      a.href = file + (target === "english" ? "" : "?lang=" + target);
      a.setAttribute("aria-current", target === lang ? "true" : "false");
    });

    if (lang === "english") return;
    document.querySelectorAll("[data-keep-lang]").forEach(function (a) {
      var href = a.getAttribute("href");
      if (!href || href.indexOf("http") === 0 || href.indexOf("#") === 0) return;
      a.setAttribute("href", href + (href.indexOf("?") > -1 ? "&" : "?") + "lang=" + lang);
    });
  }

  /* ---- flatten the manifest into one ordered reading list ---- */
  function readingList() {
    var list = [];
    comic.chapters.forEach(function (ch) {
      ch.pages.forEach(function (p) {
        var hasLang = p[lang] !== false;
        var folder = comic.folders[hasLang ? lang : "english"] || "";
        list.push({
          src: folder + p.file,
          chapter: ch.title[lang] || ch.title.english,
          fallback: !hasLang,
          n: list.length + 1
        });
      });
    });
    return list;
  }

  var pages = readingList();

  function makeCard(page, index) {
    var card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.setAttribute("aria-label", t("card.open") + " " + page.n);

    var img = document.createElement("img");
    img.src = page.src;
    img.alt = t("card.open") + " " + page.n;
    img.loading = "lazy";
    img.onerror = function () {
      img.style.opacity = "0.25";
      card.title = "Missing file: " + page.src;
    };

    var bar = document.createElement("div");
    bar.className = "card__bar";
    var num = document.createElement("b");
    num.textContent = String(page.n).padStart(2, "0");
    var tag = document.createElement("span");
    tag.textContent = page.fallback ? t("card.enonly") : LANGS[lang].short;
    bar.appendChild(num);
    bar.appendChild(tag);

    card.appendChild(img);
    card.appendChild(bar);
    card.addEventListener("click", function () { openReader(index); });
    return card;
  }

  /* ---- build the archive grid ---- */
  function buildArchive(root) {
    if (!comic.chapters.length) {
      root.innerHTML = '<p class="lede">' + t("comics.empty") + "</p>";
      return;
    }

    var index = 0;
    comic.chapters.forEach(function (ch) {
      var section = document.createElement("section");
      section.className = "chapter";
      section.id = ch.id;

      var head = document.createElement("div");
      head.className = "chapter__head";
      var h2 = document.createElement("h2");
      h2.textContent = ch.title[lang] || ch.title.english;
      var count = document.createElement("span");
      count.className = "chapter__count";
      count.textContent = ch.pages.length + " " + plural(ch.pages.length, t("units.pages"));
      head.appendChild(h2);
      head.appendChild(count);

      var blurb = document.createElement("p");
      blurb.className = "chapter__blurb";
      blurb.textContent = ch.blurb ? (ch.blurb[lang] || ch.blurb.english) : "";

      var grid = document.createElement("div");
      grid.className = "grid";
      ch.pages.forEach(function () {
        grid.appendChild(makeCard(pages[index], index));
        index++;
      });

      section.appendChild(head);
      if (blurb.textContent) section.appendChild(blurb);
      section.appendChild(grid);
      root.appendChild(section);
    });
  }

  /* ---- latest-page teaser on the main page ---- */
  function buildLatest(root) {
    pages.slice(-3).reverse().forEach(function (page) {
      root.appendChild(makeCard(page, pages.indexOf(page)));
    });
  }

  /* ---- reader overlay ---- */
  var reader, stage, counter, note, prevBtn, nextBtn, at = 0, lastFocus = null;

  function paint() {
    var page = pages[at];
    stage.innerHTML = "";
    var img = document.createElement("img");
    img.src = page.src;
    img.alt = t("card.open") + " " + page.n;
    stage.appendChild(img);
    counter.textContent = page.chapter + " — " +
      String(page.n).padStart(2, "0") + " / " + String(pages.length).padStart(2, "0");
    note.textContent = page.fallback ? t("reader.fallback") : "";
    prevBtn.disabled = at === 0;
    nextBtn.disabled = at === pages.length - 1;
    stage.scrollTop = 0;
  }

  function openReader(i) {
    lastFocus = document.activeElement;
    at = i;
    reader.classList.add("is-open");
    document.body.style.overflow = "hidden";
    paint();
    nextBtn.focus();
  }

  function closeReader() {
    reader.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  function step(d) {
    var next = at + d;
    if (next < 0 || next >= pages.length) return;
    at = next;
    paint();
  }

  function wireReader() {
    reader = document.querySelector("[data-reader]");
    if (!reader) return;
    stage   = reader.querySelector("[data-reader-stage]");
    counter = reader.querySelector("[data-reader-counter]");
    note    = reader.querySelector("[data-reader-note]");
    prevBtn = reader.querySelector("[data-reader-prev]");
    nextBtn = reader.querySelector("[data-reader-next]");

    prevBtn.addEventListener("click", function () { step(-1); });
    nextBtn.addEventListener("click", function () { step(1); });
    reader.querySelector("[data-reader-close]").addEventListener("click", closeReader);

    document.addEventListener("keydown", function (e) {
      if (!reader.classList.contains("is-open")) return;
      if (e.key === "Escape") closeReader();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });

    document.querySelectorAll("[data-read-first]").forEach(function (b) {
      b.addEventListener("click", function (e) { e.preventDefault(); if (pages.length) openReader(0); });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    translate();          /* copy first — it rewrites the counter markup */
    wireLanguage();
    wireReader();

    var archive = document.querySelector("[data-archive]");
    if (archive) buildArchive(archive);

    var latest = document.querySelector("[data-latest]");
    if (latest) buildLatest(latest);

    document.querySelectorAll("[data-total]").forEach(function (el) {
      el.textContent = String(pages.length).padStart(2, "0");
    });
  });
})();