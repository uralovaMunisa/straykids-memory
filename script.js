/* =========================================================
   STRAY KIDS — MEMORY BOOK
   JavaScript
========================================================= */


/* =========================================================
   DATA
========================================================= */

const albums = [
  ["Mixtape","2018","Pre-debut","Boshlanish nuqtasi: 3RACHA ijodiy yadrosi va guruhning o‘zini topish g‘oyasi shakllandi."],
  ["I am NOT","2018","Mini Album","Rasmiy debut. “Men kimman?” degan savol, kuchli performans va o‘z ovozini izlash."],
  ["I am WHO","2018","Mini Album","O‘zlik va bosimlar haqida hikoya. Turli janrlar orqali guruhning ranglari kengaydi."],
  ["I am YOU","2018","Mini Album","STAY bilan bog‘liqlik kuchaygan era. “Sen” va “men” o‘rtasidagi munosabat markazga chiqdi."],
  ["Clé 1 : MIROH","2019","Mini Album","Yangi yo‘l va jasorat. Kuchli ritm, sahna energiyasi va “maze” obrazlari."],
  ["Clé 2 : Yellow Wood","2019","Special Album","Yo‘lning o‘rtasidagi noaniqlik va tanlovlar. Oldingi treklar bilan yangi material birlashdi."],
  ["Clé : LEVANTER","2019","Mini Album","Bir bosqichni qo‘yib yuborib, o‘z yo‘lini davom ettirish haqidagi yanada ichki era."],
  ["GO LIVE","2020","Studio Album","Stray Kids ovozining katta deklaratsiyasi. “God’s Menu” bilan o‘ziga xos uslub yanada aniq ko‘rindi."],
  ["IN LIFE","2020","Repackage","GO LIVE g‘oyasini kengaytirgan repackage: yangi treklar va hayotning turli tomonlarini ko‘rsatish."],
  ["ALL IN","2020","Japanese Mini Album","Yaponiyadagi faoliyatni kuchaytirgan loyiha; mavjud SKZ uslubini yapon relizlariga moslashtirdi."],
  ["NOEASY","2021","Studio Album","Shovqin, tanqid va o‘z yo‘lida turish mavzulari. Katta hajmdagi va rang-barang loyiha."],
  ["Christmas EveL","2021","Special Single Album","Qishki mavzuni SKZning o‘ziga xos energiyasi bilan aralashtirgan maxsus release."],
  ["ODDINARY","2022","Mini Album","“Odd” va “ordinary” qarama-qarshiligi. Oddiylikni o‘ziga xoslikka aylantirish konsepti."],
  ["MAXIDENT","2022","Mini Album","Sevgi va munosabat mavzulariga ko‘proq yaqinlashgan, lekin SKZning kuchli rangini saqlagan era."],
  ["5-STAR","2023","Studio Album","Katta miqyosdagi self-produced loyiha. Guruhning o‘ziga xosligi va tajribasi bir joyga jamlandi."],
  ["THE SOUND","2023","Japanese Studio Album","Yaponiyadagi to‘liq albom. SKZning tovush palitrasini yapon bozorida kengaytirdi."],
  ["ROCK-STAR","2023","Mini Album","Sahnadagi shovqin, erkinlik va energiyani markazga qo‘ygan qisqa, kuchli era."],
  ["ATE","2024","Mini Album","Yangi global bosqich. “Chk Chk Boom” va kuchli performans konsepti bilan davrni belgiladi."],
  ["GIANT","2024","Japanese Studio Album","Yaponiyadagi katta loyihalardan biri; “GIANT” g‘oyasi kuch va o‘sishni ifodalaydi."],
  ["HOP","2024","SKZHOP HIPTAPE","Sub-unit va individual ranglar orqali guruh ichidagi turli ovozlarni ko‘rsatdi."],
  ["Hollow","2025","Japanese EP","Yapon EP-si. Yangi hikoya, yangi kayfiyat va tour davridagi o‘sishni aks ettirdi."],
  ["KARMA","2025","Studio Album","Guruhning global rekordlari kuchaygan davrdagi katta albom loyihasi."],
  ["DO IT","2025","SKZ-IT TAPE","Qisqa, keskin va eksperimental loyiha; yangi energiyani 2026-yilga olib o‘tdi."],
  ["SKZ-REPLAY 2026 Pt.1","2026","Album","A’zolarning individual treklarini markazga olib chiqqan 2026-yilgi xotira to‘plami."],
  ["THIS & THAT","2026","Album / EP","2026-yil 7-avgust. 8 trek; 3RACHA barcha treklarning production jarayonida markaziy rol o‘ynadi."]
];


const members = [
  ["Bang Chan","방찬","1997.10.03","Leader · Producer · Vocal/Rap",
   "Lee Know, Changbin, Hyunjin, HAN, Felix, Seungmin, I.N",
   "Guruhning musiqiy yo‘nalishini boshqarish, production va a’zolarni birlashtirishdagi roli bilan tanilgan."],

  ["Lee Know","리노","1998.10.25","Dancer · Vocal",
   "HAN, Seungmin, Changbin",
   "Raqs va sahna aniqligi bilan ajralib turadi; guruh ichida kulgili, to‘g‘ridan-to‘g‘ri xarakteri bilan mashhur."],

  ["Changbin","창빈","1999.08.11","Rapper · Producer",
   "Bang Chan, HAN, Lee Know",
   "3RACHA a’zosi. Kuchli rap, lyric writing va jamoa ichidagi maslahatgo‘y tabiati bilan tanilgan."],

  ["Hyunjin","현진","2000.03.20","Dancer · Rapper · Artist",
   "Felix, Changbin, I.N",
   "Raqs va vizual san’atga qiziqishi bilan ajralib turadi; sahna ifodasi juda kuchli."],

  ["HAN","한","2000.09.14","Rapper · Vocal · Producer",
   "Changbin, Bang Chan, Lee Know",
   "3RACHA a’zosi. Rap, vokal va songwritingda ko‘p qirrali; kayfiyatni ko‘taruvchi hazillari bilan ham tanilgan."],

  ["Felix","필릭스","2000.09.15","Dancer · Rapper · Vocal",
   "Hyunjin, Lee Know, I.N",
   "Past ovozi, raqs va STAYga iliq munosabati bilan mashhur."],

  ["Seungmin","승민","2000.09.22","Main Vocal",
   "Lee Know, HAN, I.N",
   "Barqaror vokali va kundalik hayotdagi hazil-mutoyibasi bilan tanilgan."],

  ["I.N","아이엔","2001.02.08","Vocal · Maknae",
   "Seungmin, Hyunjin, Felix",
   "Guruhning maknaesi. Vokal, sahna va o‘ziga xos yumor bilan yillar davomida katta o‘sishni ko‘rsatdi."]
];


const mvs = [
  ["District 9","2018","https://www.youtube.com/embed/u6unJQownW4"],
  ["MIROH","2019","https://www.youtube.com/embed/Dab4EENTW5I"],
  ["God's Menu","2020","https://www.youtube.com/embed/TQTcT1Gz3PM"],
  ["Back Door","2020","https://www.youtube.com/embed/X-uJtV8ScYk"],
  ["Thunderous","2021","https://www.youtube.com/embed/EaswWiwMVs8"],
  ["MANIAC","2022","https://www.youtube.com/embed/OvioeS1ZZ7o"],
  ["CASE 143","2022","https://www.youtube.com/embed/jYSlpC6Ud2A"],
  ["S-CLASS","2023","https://www.youtube.com/embed/JsOOis4bBFg"],
  ["LALALALA","2023","https://www.youtube.com/embed/B5epjA3bQ9A"],
  ["Chk Chk Boom","2024","https://www.youtube.com/embed/0P0aQreFs8w"],
  ["CEREMONY","2025","https://www.youtube.com/embed/P7vBoGWoReg"],
  ["DO IT","2025","https://www.youtube.com/embed/NED7nev2ywQ"]
];


const quotes = [
  ["Bang Chan",
   "“When I look on stage and see the members, they give me a lot of strength.”",
   "A’zolar uning uchun kuch va qo‘llab-quvvatlash manbai ekanini ifodalagan."],

  ["Lee Know",
   "“I know, you know, we know, Lee Know.”",
   "Lee Know bilan bog‘liq eng mashhur iboralardan biri."],

  ["Changbin",
   "“I always decide on the topic before starting.”",
   "Songwriting jarayonida avval mavzuni belgilashini aytgan."],

  ["Hyunjin",
   "“Drawing is one of the things I enjoy.”",
   "Hyunjinning rasm chizishga bo‘lgan qiziqishini ko‘rsatadi."],

  ["HAN",
   "“Another Day” haqida: “A bit sad… nobody [chose it].”",
   "Qo‘shig‘i tanlanmagani haqidagi samimiy va hazil aralash lahza."],

  ["Felix",
   "“STAY” — uning suhbatlarida tez-tez qaytadigan so‘z.",
   "Felixning STAYga bo‘lgan iliq munosabati bilan bog‘liq."],

  ["Seungmin",
   "“A long walk and a good playlist can help.”",
   "Uzoq yurish va yaxshi playlist unga yordam berishini aytgan."],

  ["I.N",
   "“Maknae on top.”",
   "I.Nning quvnoq va o‘ziga xos iboralaridan biri."]
];


const travel = [
  ["World Tour","Global stages"],
  ["Seoul","Home stage"],
  ["Japan","Japanese eras"],
  ["North America","Arena memories"],
  ["Europe","STAY everywhere"],
  ["Latin America","Festival energy"]
];


/* =========================================================
   WIKIPEDIA IMAGE API
========================================================= */

const wikiCache = {};


async function wikiImage(title, fallback = "") {

  if (wikiCache[title]) {
    return wikiCache[title];
  }

  try {

    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        title.replaceAll(" ", "_")
      )}`
    );

    const data = await response.json();

    const image =
      data?.thumbnail?.source ||
      data?.originalimage?.source ||
      fallback;

    wikiCache[title] = image || fallback;

    return wikiCache[title];

  } catch (error) {

    console.warn("Image yuklanmadi:", title);

    return fallback;
  }
}


/* =========================================================
   SECURITY — TEXT SANITIZATION
========================================================= */

function safeText(text) {

  return String(text).replace(/[<>&"]/g, character => ({

    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    '"': "&quot;"

  }[character]));

}


/* =========================================================
   ALBUMS
========================================================= */

function renderAlbums() {

  const container =
    document.querySelector("#albumGrid");

  if (!container) return;


  container.innerHTML = albums.map((album, index) => `

    <article class="album-card reveal">

      <div
        class="album-cover"
        id="album-${index}">

        <span class="album-year">
          ${safeText(album[1])}
        </span>

      </div>

      <div class="album-body">

        <h3>
          ${safeText(album[0])}
        </h3>

        <div class="album-type">
          ${safeText(album[2])}
        </div>

        <p>
          ${safeText(album[3])}
        </p>

        <span class="album-tag">
          ERA ${String(index + 1).padStart(2, "0")}
        </span>

      </div>

    </article>

  `).join("");


  albums.forEach(async (album, index) => {

    const image = await wikiImage(album[0]);

    const element =
      document.querySelector(`#album-${index}`);

    if (element && image) {

      element.style.backgroundImage =
        `url("${image}")`;

    }

  });

}


/* =========================================================
   MEMBERS
========================================================= */

function renderMembers() {

  const container =
    document.querySelector("#memberGrid");

  if (!container) return;


  container.innerHTML = members.map((member, index) => `

    <article class="member-card reveal">

      <div
        class="member-photo"
        id="member-${index}">
      </div>

      <div class="member-info">

        <h3>
          ${safeText(member[0])}
        </h3>

        <div class="member-role">
          ${safeText(member[1])}
          ·
          ${safeText(member[3])}
        </div>

        <p>
          ${safeText(member[5])}
        </p>

        <div class="friend">

          <b>Yaqin guruhdoshlar:</b>

          ${safeText(member[4])}

        </div>

      </div>

    </article>

  `).join("");


  members.forEach(async (member, index) => {

    const image =
      await wikiImage(member[0]);

    const element =
      document.querySelector(`#member-${index}`);

    if (element && image) {

      element.style.backgroundImage =
        `url("${image}")`;

    }

  });

}


/* =========================================================
   MUSIC VIDEOS
========================================================= */

function renderMVs() {

  const container =
    document.querySelector("#mvGrid");

  if (!container) return;


  container.innerHTML = mvs.map(mv => `

    <article class="mv-card reveal">

      <div class="mv-video">

        <iframe
          src="${mv[2]}?rel=0&modestbranding=1"
          title="Stray Kids ${safeText(mv[0])} M/V"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>

      </div>

      <h3>
        ${safeText(mv[0])}
      </h3>

      <p>
        ${safeText(mv[1])} · official video embed
      </p>

    </article>

  `).join("");

}


/* =========================================================
   TRAVEL
========================================================= */

async function renderTravel() {

  const container =
    document.querySelector("#travelGrid");

  if (!container) return;


  const queries = [
    "Stray Kids",
    "Stray Kids concert",
    "Stray Kids Japan",
    "Stray Kids Europe",
    "Stray Kids Latin America",
    "Stray Kids world tour"
  ];


  const images =
    await Promise.all(
      queries.map(query => wikiImage(query))
    );


  container.innerHTML =
    travel.map((item, index) => `

      <article class="travel-card reveal">

        <img
          src="${images[index] || ""}"
          alt="${safeText(item[0])}"
          loading="lazy">

        <span>
          ${safeText(item[0])}
          ·
          ${safeText(item[1])}
        </span>

      </article>

    `).join("");

}


/* =========================================================
   QUOTES
========================================================= */

function renderQuotes() {

  const container =
    document.querySelector("#quoteGrid");

  if (!container) return;


  container.innerHTML =
    quotes.map((quote, index) => `

      <article class="quote-card reveal">

        <div
          class="quote-photo"
          id="quote-${index}">
        </div>

        <blockquote>
          ${safeText(quote[1])}
        </blockquote>

        <p class="quote-note">
          ${safeText(quote[2])}
        </p>

        <footer>
          — ${safeText(quote[0])}
        </footer>

      </article>

    `).join("");


  quotes.forEach(async (quote, index) => {

    const image =
      await wikiImage(quote[0]);

    const element =
      document.querySelector(`#quote-${index}`);

    if (element && image) {

      element.style.backgroundImage =
        `url("${image}")`;

    }

  });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function observeReveal() {

  const elements =
    document.querySelectorAll(".reveal");


  if (!("IntersectionObserver" in window)) {

    elements.forEach(element => {
      element.classList.add("show");
    });

    return;
  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  elements.forEach(element => {

    observer.observe(element);

  });

}


/* =========================================================
   NAVBAR
========================================================= */

function setupNavbar() {

  const navbar =
    document.querySelector(".navbar");

  if (!navbar) return;


  window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

      navbar.classList.add("scrolled");

    } else {

      navbar.classList.remove("scrolled");

    }

  });

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

  const menuButton =
    document.querySelector(".menu-btn");

  const navLinks =
    document.querySelector(".nav-links");


  if (!menuButton || !navLinks) return;


  menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const opened =
      navLinks.classList.contains("active");

    menuButton.setAttribute(
      "aria-expanded",
      opened ? "true" : "false"
    );

  });


  document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

}


/* =========================================================
   BACK TO TOP
========================================================= */

function setupTopButton() {

  const button =
    document.querySelector("#topButton");

  if (!button) return;


  button.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });


  window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

      button.classList.add("show");

    } else {

      button.classList.remove("show");

    }

  });

}


/* =========================================================
   MEMORY MODAL
========================================================= */

function setupMemoryModal() {

  const dialog =
    document.querySelector("#memoryDialog");

  const memoryButton =
    document.querySelector("#memoryButton");

  const saveButton =
    document.querySelector("#saveMemory");

  const closeButton =
    document.querySelector(".close-button");


  if (!dialog || !memoryButton || !saveButton) {
    return;
  }


  memoryButton.addEventListener("click", () => {

    if (typeof dialog.showModal === "function") {

      dialog.showModal();

    } else {

      dialog.setAttribute("open", "");

    }

  });


  if (closeButton) {

    closeButton.addEventListener("click", () => {

      dialog.close();

    });

  }


  saveButton.addEventListener("click", () => {

    const nameInput =
      document.querySelector("#memoryName");

    const textInput =
      document.querySelector("#memoryText");


    const name =
      nameInput?.value.trim() || "STAY";

    const memory =
      textInput?.value.trim();


    if (!memory) {

      showToast("Xotira yozing 💜");

      return;

    }


    const data = {

      name: name,

      memory: memory,

      date:
        new Date().toLocaleDateString("uz-UZ")

    };


    localStorage.setItem(
      "strayKidsMemory",
      JSON.stringify(data)
    );


    if (nameInput) {
      nameInput.value = "";
    }

    if (textInput) {
      textInput.value = "";
    }


    dialog.close();


    showToast("Xotirangiz saqlandi 💜");

  });

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

  const toast =
    document.querySelector("#toast");

  if (!toast) return;


  toast.textContent = message;

  toast.classList.add("show");


  clearTimeout(window.toastTimer);


  window.toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 2500);

}


/* =========================================================
   LOAD SAVED MEMORY
========================================================= */

function loadSavedMemory() {

  try {

    const saved =
      localStorage.getItem("strayKidsMemory");

    if (!saved) return;


    const data =
      JSON.parse(saved);

    console.log(
      "STAY xotirasi:",
      data
    );

  } catch (error) {

    console.warn(
      "Saqlangan xotirani o‘qib bo‘lmadi."
    );

  }

}


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

function setupSmoothScroll() {

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener("click", event => {

        const targetId =
          link.getAttribute("href");

        if (!targetId || targetId === "#") {
          return;
        }


        const target =
          document.querySelector(targetId);

        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    });

}


/* =========================================================
   HERO BACKGROUND
========================================================= */

async function setupHero() {

  const heroImage =
    await wikiImage("Stray Kids");


  if (!heroImage) return;


  const hero =
    document.querySelector(".hero-bg");

  const factImage =
    document.querySelector(".fact-image");


  if (hero) {

    hero.style.backgroundImage =
      `url("${heroImage}")`;

  }


  if (factImage) {

    factImage.style.backgroundImage =
      `url("${heroImage}")`;

  }

}


/* =========================================================
   INITIALIZE EVERYTHING
========================================================= */

async function init() {

  renderAlbums();

  renderMembers();

  renderMVs();

  renderQuotes();

  await renderTravel();

  await setupHero();

  setupNavbar();

  setupMobileMenu();

  setupTopButton();

  setupMemoryModal();

  setupSmoothScroll();

  loadSavedMemory();

  observeReveal();

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  init
);