let reactClicked = false;
let viteClicked = false;

//création des énumérations
function setReactClicked() {
  reactClicked = true;
}
function setViteClicked() {
  viteClicked = true;
}

const fish = ["poissonBasique", "poissonRouge", "poissonColorer", "Baleine"];

const ocean = ["corail", "algue"];

enum stat {
  poissonSup,
  rareteSup,
  multPeche,
}

//création des cannes à pêche

type cap = {
  nom: string;
  stat: stat;
  percent: number;
};

const canneBasique: cap = {
  nom: "canneBasique",
  stat: stat.poissonSup,
  percent: 5,
};
const cannePremium: cap = {
  nom: "cannePremium",
  stat: stat.rareteSup,
  percent: 10,
};
const Arpon: cap = {
  nom: "Arpon",
  stat: stat.multPeche,
  percent: 5,
};

const j1: joueur = {
  equiped: canneBasique,
  nb_coraux: 0,
  nb_dechets: 0,
  nb_poissons: 0,
  poissonSup: 1,
  rareteSup: 1,
  multPeche: 1,
};

const inventaire: inv = [canneBasique];
type augment = {
  nom: string;
  amelioration: string;
  stat: stat;
  percent: number;
};

type inv = [cap, ...cap[]];

type joueur = {
  equiped: cap;
  nb_poissons: number;
  nb_coraux: number;
  nb_dechets: number;
  poissonSup: number;
  rareteSup: number;
  multPeche: number;
};

function points() {
  let chiffre = Math.round(Math.random() * 5 * j1.poissonSup);
  if (chiffre > 3) {
    j1.nb_dechets += 1;
    return [0, "dechet"];
  } else if (chiffre > 2) {
    let oceanRandom = Math.round(Math.random() * 4);
    j1.nb_coraux += 1;
    return [chiffre + 1, ocean[oceanRandom]];
  } else {
    let poissonRandom = Math.round(Math.random() * 4 * j1.rareteSup);
    j1.nb_poissons += 1;
    return [5 * poissonRandom, fish[poissonRandom]];
  }
}

type mission = {
  num: number;
  obj: boolean;
  desc: string;
};

const cheater = { num: 1, obj: false, desc: "Essayer d'inspecter l'élément" };

const cliqueGauche = { num: 2, obj: false, desc: "Clique Gauche" };

const fullscreen = { num: 3, obj: false, desc: "Entrer en fullscreen" };

const speedClick = {
  num: 4,
  obj: false,
  desc: "Cliquer 5 fois en moins d'une seconde",
};

let reactLearn = { num: 1, obj: reactClicked, desc: "Cliquer sur React" };

let viteLearn = { num: 2, obj: viteClicked, desc: "Cliquer sur Vite" };

let cinqPoissons = { num: 3, obj: false, desc: "Capter 5 poissons"};

let centPoissons = { num: 4, obj: false, desc: "Capter 100 poissons"};

let cinqCentsPoissons = {num : 5, obj: false, desc: "Capter 500 poissons"};

enum achievements {
  cheater,
  cliqueGauche,
  fullscreen,
  speedClick,
  reactLearn,
  viteLearn,
}

function ach() {return [reactLearn,viteLearn, cinqPoissons, centPoissons, cinqCentsPoissons]};
function apparition() {
  const boat = document.getElementById("bateau");
  boat.style.opacity = "1";
  // Ajouter la classe "move" pour démarrer l'animation
  boat.classList.add("move");

  // Une fois l'animation terminée, réinitialiser la position
  boat.addEventListener(
    "transitionend",
    () => {
      boat.style.opacity = "0";
      boat.classList.remove("move"); // Retirer la classe pour revenir à la position initiale
      // Réinitialiser l'opacité
    },
    { once: true }
  );
}

function equip(item: cap) {}

function buy(augment: augment) {}

export { points, equip, buy, setReactClicked, setViteClicked };
