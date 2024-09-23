var home = document.getElementById("home");
var education = document.getElementById("education");
var work = document.getElementById("work");
var publication = document.getElementById("publication");
var books_awards = document.getElementById("books_award");
var events = document.getElementById("events");

var sections = [home, education, work, publication, books_awards, events];

var home__icon = document.getElementById("home__icon");
var edu__icon = document.getElementById("edu__icon");
var work__icon = document.getElementById("work__icon");
var public__icon = document.getElementById("public__icon");
var book__icon = document.getElementById("book__icon");
var events__icon = document.getElementById("events__icon");

var home__icon1 = document.getElementById("home__icon1");
var edu__icon1 = document.getElementById("edu__icon1");
var work__icon1 = document.getElementById("work__icon1");
var public__icon1 = document.getElementById("public__icon1");
var book__icon1 = document.getElementById("book__icon1");
var events__icon1 = document.getElementById("events__icon1");

var skills = document.getElementById("skills");
var administrative__container = document.getElementById(
  "administrative__container"
);
var sidebar = document.getElementById("sidebar");

var right__side = document.getElementById("right__side");

var humburger = document.getElementById("humburger");
var humburger1 = document.getElementById("humburger1");

var center = document.getElementById("center");
var icons = [
  home__icon,
  edu__icon,
  work__icon,
  public__icon,
  book__icon,
  events__icon,
];
var icons1 = [
  home__icon1,
  edu__icon1,
  work__icon1,
  public__icon1,
  book__icon1,
  events__icon1,
];

function showCenter(active, icon) {
  sections.forEach((section) => {
    section.style.display = "none";
  });

  icons.forEach((icon) => {
    icon.style.backgroundColor = "#f0f0f6";
  });

  if (icon === "home__icon")
    if (active === "home") {
      home.style.display = "block";
      home__icon.style.backgroundColor = "#ffb400";
    }
  if (active === "education") {
    education.style.display = "block";
    edu__icon.style.backgroundColor = "#ffb400";
  }
  if (active === "work") {
    work.style.display = "block";
    work__icon.style.backgroundColor = "#ffb400";
  }
  if (active === "publication") {
    publication.style.display = "block";
    public__icon.style.backgroundColor = "#ffb400";
  }
  if (active === "books_award") {
    books_awards.style.display = "block";
    book__icon.style.backgroundColor = "#ffb400";
  }
  if (active === "events") {
    events.style.display = "block";
    events__icon.style.backgroundColor = "#ffb400";
  }
}

function showCenter1(active, icon) {
  sections.forEach((section) => {
    section.style.display = "none";
  });

  icons1.forEach((icon) => {
    icon.style.backgroundColor = "#f0f0f6";
  });

  if (icon === "home__icon1")
    if (active === "home") {
      home.style.display = "block";
      home__icon1.style.backgroundColor = "#ffb400";
      administrative__container.style.display = "none";
      skills.style.display = "block";
    }
  if (active === "education") {
    education.style.display = "block";
    edu__icon1.style.backgroundColor = "#ffb400";
    administrative__container.style.display = "none";
    skills.style.display = "block";
  }
  if (active === "work") {
    work.style.display = "block";
    work__icon1.style.backgroundColor = "#ffb400";
    skills.style.display = "none";
    administrative__container.style.display = "block";
  }
  if (active === "publication") {
    publication.style.display = "block";
    public__icon1.style.backgroundColor = "#ffb400";
    sidebar.classList.add("active1");
    right__side.style.width = "5%";
    center.style.width = "95%";
  }
  if (active !== "publication") {
    sidebar.classList.remove("active1");
  }

  if (active === "books_award") {
    books_awards.style.display = "block";
    book__icon1.style.backgroundColor = "#ffb400";
    administrative__container.style.display = "none";
    skills.style.display = "block";
  }
  if (active === "events") {
    events.style.display = "block";
    events__icon1.style.backgroundColor = "#ffb400";
    administrative__container.style.display = "block";
    skills.style.display = "none";
  }
}

function toggleSidebar() {
  sidebar.classList.toggle("active");
}

function onReload() {
  home.style.display = "block";
  education.style.display = "none";
  work.style.display = "none";
  publication.style.display = "none";
  books_awards.style.display = "none";
  events.style.display = "none";
  home__icon.style.backgroundColor = "#ffb400";
  home__icon1.style.backgroundColor = "#ffb400";
}

onReload();
