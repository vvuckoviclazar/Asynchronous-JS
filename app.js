//Synchronous

function task1(callback) {
  setTimeout(() => {
    console.log("1. Preheat the oven to 350°F (180°C).");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("2. Chop half the chocolate...");
    callback();
  }, 2000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("3. Mix butter & sugar.");
    callback();
  }, 1500);
}

function task4(callback) {
  setTimeout(() => {
    console.log("4. Beat in the eggs and vanilla... ");
    callback();
  }, 3000);
}

function task5(callback) {
  setTimeout(() => {
    console.log("5. Whisk in the melted chocolate.");
    callback();
  }, 4000);
}

function task6(callback) {
  setTimeout(() => {
    console.log("6. Fold in the other half of chocolate...");
    callback();
  }, 3500);
}

function task7(callback) {
  setTimeout(() => {
    console.log("5. Bake for 20-25minutes...");
    callback();
  }, 1800);
}

function task8(callback) {
  setTimeout(() => {
    console.log("6. Slice, serve & enjoy!");
    callback();
  }, 500);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {
          task6(() => {
            task7(() => {
              task8(() => {});
            });
          });
        });
      });
    });
  });
});

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
