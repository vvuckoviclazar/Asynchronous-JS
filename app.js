// Promises / Async-Await

const preHeatOven = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const preHeatOven = false;

      if (preHeatOven) {
        resolve("Preheat oven to 180deg");
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};

const addSugarAndChocoChips = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addChoco = true;

      if (addChoco) {
        resolve(
          "Place butter and chocolate chips, stir until melted and smooth"
        );
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};

const addFlourCocoaAndSalt = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addSaltFlour = true;

      if (preHeatOven) {
        resolve("Add flour, coco and salt until smooth");
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};

const bakeMixture = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bakeMixture = true;

      if (bakeMixture) {
        resolve("Bake for 24 minutes for really good center");
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};

const bakeChocolateBrownies = async () => {
  try {
    const taskOne = await preHeatOven();
    console.log(taskOne);
    const taskTwo = await addSugarAndChocoChips();
    console.log(taskTwo);

    const taskThree = await addFlourCocoaAndSalt();
    console.log(taskThree);

    const taskFour = await bakeMixture();
    console.log(taskFour);

    console.log("Enjoy! Your perfect Chocolate Brownies!");
  } catch (error) {
    console.log(error);
  }
};

bakeChocolateBrownies();
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
