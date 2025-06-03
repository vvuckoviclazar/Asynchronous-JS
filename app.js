//Promisses

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise one resolved!");
  }, 2000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise Two Rejected!");
  }, 1500);
});

Promise.all([promiseOne, promiseTwo])
  .then((data) => console.log(data[0], data[1]))
  .catch((error) => console.log(error));

// 1.
// kad se upali aplikacija da se izlistaju pokem0ni
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
