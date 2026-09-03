/* =====================================================================
   TRANSLATIONS — every word on the site lives here, in both languages.

   To change a wording, edit it once in this file and it updates on every
   page. Keys are grouped by where they appear. HTML tags inside the
   strings are allowed (<strong>, <span>, <br>).
   ===================================================================== */

window.I18N = {

  /* ================================================================ */
  english: {
    "brand":            '<span style="color: var(--rip)">Tara</span> <span style="color: var(--bone)">and</span> <span style="color: var(--print)">Suzie</span>',
    "logo.alt":         "Tara and Suzie logo",

    "title.home":       "Tara and Suzie — GEEDRO Edition",
    "title.comics":     "Comic pages — Tara and Suzie",
    "title.characters": "Characters — Tara and Suzie",
    "title.about":      "About — Tara and Suzie",

    "meta.home":        "Tara and Suzie GEEDRO Edition is a reimagined take on the animated series of the same name made by supervore.",
    "meta.comics":      "Every published page of the Tara and Suzie fan comic is available in English or Ukrainian.",
    "meta.characters":  "Who appears in the Tara and Suzie fan comic?",
    "meta.about":       "The story of making Tara and Suzie fan-fiction",

    "nav.home":         "Home",
    "nav.comics":       "Comic pages",
    "nav.characters":   "Characters",
    "nav.about":        "About",
    "lang.label":       "Language",

    /* --- main page --- */
    "home.slug":        'Fan comic <span>//</span> updates when a page is done',
    "home.title":       "Tara and Suzie",
    "home.lede":        'Tara and Suzie GEEDRO Edition is a reimagined take on the animated series of the same name made by supervore.. Every page is published in <strong>English</strong> and <strong>Ukrainian</strong> — pick a language and start from the beginning.',
    "home.cta.first":   "Start from page 01",
    "home.cta.browse":  "Browse the archive",
    "home.notice.label":"Notice",
    "home.notice.text": "This comic is not canon, despite attempts to keep the story as consistent to source material as possible.",

    "home.latest.slug": 'Latest <span>//</span> <span data-total>00</span> pages online',
    "home.latest.h2":   "Newest pages",
    "home.latest.cta":  "See every page",

    "home.what.slug":   "What this is",
    "home.what.h2":     "Read it in your language",
    "home.what.p2":     "If a translation hasn't caught up, the reader shows the English page and labels it, rather than leaving a gap in the story.",

    /* --- archive --- */
    "comics.slug":      'Archive <span>//</span> <span data-total>00</span> pages',
    "comics.title":     "Comic pages",
    "comics.lede":      "Tap any page to open the reader. Arrow keys turn pages, Esc closes.",
    "comics.empty":     'No pages published yet. Add one in <code>data/comic.js</code>.',

    /* --- characters --- */
    "chars.slug":       "Cast",
    "chars.title":      "Characters",
    "chars.lede":       "Everyone who turns up in this run, and how they're written here. Where the fan comic reads a character differently from the source, it says so.",
    "chars.tara.name":  "Tara A. West",
    "chars.tara.role":  "Lead",
    "chars.tara.bio":   "Tara A. West is a 17-years old daughter of Shawn and Nicole, who live in Vosupper state in West Manor. She is very spoiled and insatious girl, who always feels hungry. On top of that, she has an ability to absorb other people, which she uses to manipulate her family to get whatever she wants. However, unlike other vore predators in state, she also has an additional ability to absorb the energy of her prey and regurgiate it, it helps her staying overweight, but curvy and pretty.",
    "chars.suzie.name": "Suzie B. West",
    "chars.suzie.role": "Lead",
    "chars.suzie.bio":  "Suzannah or simply Suzie is a 12-year old younger sister of Tara West. While Tara enjoyed her best life with food and luxury gifts, Suzie seemed to be totally neglected by Shawn and Nicole. At one point she tried to give up, but when it failed, Suzie started resisting serving Tara and because of that she became Tara's most repeated victim.",
    "chars.add.name":   "Add a character",
    "chars.add.role":   "Template",
    "chars.add.bio":    'Copy this block in <strong>characters.html</strong>, swap the image path, and add new keys for the name, role and text in <strong>data/i18n.js</strong>. The grid reflows on its own.',

    /* --- about --- */
    "about.slug":       "Production notes",
    "about.title":      "About",
    "about.lede":       "This page is still work in progress...",

    "about.dt.started": "Started",
    "about.dd.started": "Add the date",
    "about.dt.written": "Written by",
    "about.dd.written": "Add a name",
    "about.dt.art":     "Art by",
    "about.dd.art":     "Add a name",
    "about.dt.trans":   "Translation",
    "about.dd.trans":   "English & Ukrainian",
    "about.dt.sched":   "Schedule",
    "about.dd.sched":   "When a page is done",

    "about.h.origin":   "Where it came from",
    "about.p.origin":   "Replace this with the real story: what made you want to draw this, which scene you had in your head first, and how long you sat on the idea before starting page one.",
    "about.h.process":  "How a page gets made",
    "about.p.process":  "Walk through the process — thumbnails, layout, lines, flats, lettering. Say what you draw it in and what takes the longest. People read this part more than you'd think.",
    "about.h.langs":    "Two languages",
    "about.p.langs":    "Each page is lettered twice, so the Ukrainian version isn't a caption bolted onto English art. Jokes that don't survive a direct translation get rewritten rather than explained — which occasionally means the two versions land the same beat in different words.",
    "about.h.canon":    "On canon",
    "about.p.canon":    "<strong>This comic is not canon, despite attempts to keep the story as consistent to source material as possible.</strong> Characterisation, timeline and tone are kept as close to the source as the story allows, but anything here that contradicts official material is this comic's invention, not a correction.",
    "about.h.support":  "Support and contact",
    "about.p.support":  "Add how people can reach you, and what supporting on Ko-fi actually goes toward. The links in the footer are on every page.",

    /* --- footer --- */
    "foot.slug":        "Elsewhere",
    "foot.kofi":        "Ko-fi",
    "foot.youtube":     "YouTube channel",
    "foot.da":          "supervore on DeviantArt",
    "foot.legal":       '<b>"Tara and Suzie" is owned by supervore productions.</b><br>This is an unofficial fan comic. It is not canon, despite attempts to keep the story as consistent to source material as possible. No ownership of the original characters or setting is claimed.',

    /* --- reader + cards --- */
    "reader.label":     "Comic reader",
    "reader.prev":      "&larr; Prev",
    "reader.next":      "Next &rarr;",
    "reader.close":     "Close",
    "reader.fallback":  "English page shown — Ukrainian translation isn't ready yet.",
    "card.enonly":      "EN ONLY",
    "card.open":        "Open page",
    "units.pages":      ["page", "pages", "pages"]
  },

  /* ================================================================ */
  ukrainian: {
    "brand":            '<span style="color: var(--rip)">Тара</span> <span style="color: var(--bone)">та</span> <span style="color: var(--print)">Сюзанна</span>',
    "logo.alt":         "Логотип «Тара та Сюзанна»",

    "title.home":       "Тара та Сюзанна",
    "title.comics":     "Сторінки коміксу — Тара та Сюзанна",
    "title.characters": "Персонажі — Тара та Сюзанна",
    "title.about":      "Про комікс — Тара та Сюзанна",

    "meta.home":        "Тара та Сюзанна - це фанатське переосмислення веб-серіалу \"Tara and Suzie\" від supervore.",
    "meta.comics":      "Усі опубліковані сторінки фанатського коміксу «Тара та Сюзанна» доступні англійською та українською.",
    "meta.characters":  "Хто з'являється у фанатському коміксі «Тара та Сюзанна».",
    "meta.about":       "Історія створення фанатської коміксу «Тара та Сюзанна».",

    "nav.home":         "Головна",
    "nav.comics":       "Сторінки",
    "nav.characters":   "Персонажі",
    "nav.about":        "Про комікс",
    "lang.label":       "Мова",

    /* --- main page --- */
    "home.slug":        'Фанатський комікс <span>//</span> оновлюється, щойно готова сторінка',
    "home.title":       "Тара та Сюзанна",
    "home.lede":        'Тара та Сюзанна - це фанатське переосмислення веб-серіалу \"Tara and Suzie\" від supervore. Кожна сторінка виходить <strong>англійською</strong> та <strong>українською</strong> — оберіть мову й починайте з початку.',
    "home.cta.first":   "Почати зі сторінки 01",
    "home.cta.browse":  "Переглянути архів",
    "home.notice.label":"Увага",
    "home.notice.text": "Цей комікс не є каноном, попри намагання зберегти історію максимально узгодженою з першоджерелом.",

    "home.latest.slug": 'Найновіше <span>//</span> <span data-total>00</span> сторінок онлайн',
    "home.latest.h2":   "Найновіші сторінки",
    "home.latest.cta":  "Усі сторінки",

    "home.what.slug":   "Що це таке",
    "home.what.h2":     "Читайте своєю мовою",
    "home.what.p2":     "Якщо переклад ще не встиг, читалка покаже англійську сторінку й позначить це, замість того щоб лишати діру в історії.",

    /* --- archive --- */
    "comics.slug":      'Архів <span>//</span> <span data-total>00</span> сторінок',
    "comics.title":     "Сторінки коміксу",
    "comics.lede":      "Натисніть будь-яку сторінку, щоб відкрити читалку. Стрілки гортають, Esc закриває.",
    "comics.empty":     'Сторінок поки немає. Додайте першу у <code>data/comic.js</code>.',

    /* --- characters --- */
    "chars.slug":       "Персонажі",
    "chars.title":      "Персонажі",
    "chars.lede":       "Усі, хто з'являється в цій історії, і якими вони написані тут. Там, де фанатський комікс читає персонажа інакше, ніж першоджерело, про це сказано прямо.",
    "chars.tara.name":  "Тара А. Уест",
    "chars.tara.role":  "Головна роль",
    "chars.tara.bio":   "Тара А. Уест — 17-річна дочка Шона та Ніколь, які живуть у штаті Восаппер у Вест-Манор. Дуже розбещена й ненаситна дівчина, яка завжди відчуває голод. До того ж вона має здатність поглинати інших людей, якою користується, щоб маніпулювати своєю родиною й отримувати все, що хоче. Проте, на відміну від інших хижаків у штаті, вона також має додаткову здатність поглинати енергію своєї здобичі та випльовувати її, що допомагає їй залишатися повною, але привабливою.",
    "chars.suzie.name": "Сюзанна Б. Уест",
    "chars.suzie.role": "Головна роль",
    "chars.suzie.bio":  "Сюзанна, або просто Сюзі, — 12-річна молодша сестра Тари Уест. Поки Тара насолоджувалася життям із їжею та розкішними подарунками, Сюзі здавалося, що батьки її зовсім ігнорують. В якийсь момент вона намагалася здатися, але коли це не вдалося, Сюзі почала чинити опір служінню Тарі і через це стала її найчастішою жертвою.",
    /* --- about --- */
    "about.slug":       "Нотатки з виробництва",
    "about.title":      "Про комікс",
    "about.lede":       "Ця сторінка ще в розробці...",

    "about.dt.started": "Початок",
    "about.dd.started": "Вкажіть дату",
    "about.dt.written": "Сценарій",
    "about.dd.written": "Вкажіть ім'я",
    "about.dt.art":     "Малюнок",
    "about.dd.art":     "Вкажіть ім'я",
    "about.dt.trans":   "Мови",
    "about.dd.trans":   "Англійська та українська",
    "about.dt.sched":   "Розклад",
    "about.dd.sched":   "Щойно сторінка готова",

    "about.h.origin":   "Звідки це взялося",
    "about.p.origin":   "Замініть це справжньою історією: що змусило вас узятися за малюнок, яка сцена з'явилася в голові першою і скільки ви виношували ідею до першої сторінки.",
    "about.h.process":  "Як народжується сторінка",
    "about.p.process":  "Опишіть процес — ескізи, компонування, контур, заливка, леттеринг. Скажіть, у чому малюєте і що забирає найбільше часу. Цю частину читають частіше, ніж здається.",
    "about.h.langs":    "Дві мови",
    "about.p.langs":    "Кожна сторінка залітерована двічі, тож українська версія — це не підпис, приліплений до англійського малюнка. Жарти, які не витримують прямого перекладу, переписуються, а не пояснюються — тому іноді дві версії беруть ту саму ноту різними словами.",
    "about.h.canon":    "Щодо канону",
    "about.p.canon":    "<strong>Цей комікс не є каноном, попри намагання зберегти історію максимально узгодженою з першоджерелом.</strong> Характери, хронологія й тон тримаються настільки близько до оригіналу, наскільки дозволяє сюжет, але все, що тут суперечить офіційним матеріалам, — вигадка цього коміксу, а не виправлення.",
    "about.h.support":  "Підтримка та контакти",
    "about.p.support":  "Додайте, як з вами зв'язатися і на що йде підтримка на Ko-fi. Посилання внизу є на кожній сторінці.",

    /* --- footer --- */
    "foot.slug":        "Де ще нас знайти",
    "foot.kofi":        "Ko-fi",
    "foot.youtube":     "Канал на YouTube",
    "foot.da":          "supervore на DeviantArt",
    "foot.legal":       '<b>«Тара та Сюзанна» («Tara and Suzie») належить supervore productions.</b><br>Це неофіційний фанатський комікс. Він не є каноном, попри намагання зберегти історію максимально узгодженою з першоджерелом. Права на оригінальних персонажів і всесвіт не заявляються.',

    /* --- reader + cards --- */
    "reader.label":     "Читалка коміксу",
    "reader.prev":      "&larr; Назад",
    "reader.next":      "Далі &rarr;",
    "reader.close":     "Закрити",
    "reader.fallback":  "Показано англійську сторінку — переклад ще не готовий.",
    "card.enonly":      "ЛИШЕ EN",
    "card.open":        "Відкрити сторінку",
    "units.pages":      ["сторінка", "сторінки", "сторінок"]
  }
};
