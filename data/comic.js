/* =====================================================================
   PAGE MANIFEST — this is the only file you edit to publish a new page.

   1. Save the page art into BOTH folders using the same filename:
        images/english/page-07.png
        images/ukrainian/page-07.png
   2. Add one line to the right chapter below.
   3. If a translation isn't ready yet, set "ukrainian": false —
      the reader falls back to the English art and says so.
   ===================================================================== */

window.COMIC = {
  folders: {
    english: "images/english/",
    ukrainian: "images/ukrainian/"
  },

  chapters: [
    {
      id: "ch-01",
      title:  { english: "Chapter 1 - Tara and Suzie",  ukrainian: "Розділ 1 -Тара та Сюзанна" },
      blurb:  {
        english:   "Where it starts, and where it immediately goes wrong.",
        ukrainian: "З чого все починається — і де одразу йде не так."
      },
      pages: [
        { file: "page-1.webp", english: true, ukrainian: true },
        { file: "page-2.webp", english: true, ukrainian: true }
        // { file: "page-3.webp", english: true, ukrainian: true }
      ]
    },
    {
      id: "ch-02",
      title:  { english: "Chapter 2 - Tara and Suzie's Halloween",  ukrainian: "Розділ 2 -Хеллоуїн Тари та Сюзанни" },
      blurb:  {
        english:   "In progress. New pages land here.",
        ukrainian: "У процесі. Нові сторінки з'являються тут."
      },
      pages: [
        // { file: "page-5.webp", english: true, ukrainian: true },
        // { file: "page-6.webp", english: true, ukrainian: true }
      ]
    }
  ]
};