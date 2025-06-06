const date = document.querySelector("#date");
const city = document.querySelector("#city");
const temp = document.querySelector("#temp");
const tempImg = document.querySelector("#temp-img");
const description = document.querySelector("#description");
const tempMax = document.querySelector("#temp-max");
const tempMin = document.querySelector("#temp-min");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const app = document.getElementById("app");

const getWeather = async () => {
  try {
    
  }
};

// 1.
// kad se upali aplikacija da se izlistaju pokemoni
// neka se izlista 50 pokemona
// klik na svakog pokemona treba da napravi zahtev za tog pojedinacnog pokemona
// kad se klikne na pokemona prikazu se neke info
// a otvara se kao modal
// takodje treba da postoji select input koji ce da ima 4 vrednosti:
// fire, water, earth, wind, electric
// kad se promeni select input npr. fire treba da se dohvate samo vatreni pokemni
// takodje prikazi u listi

// 2.
// stavi jedan tekst input i na submit dohvati samo tog pokemona
// npr: ukucam pikachu i dohvatim pikachua
