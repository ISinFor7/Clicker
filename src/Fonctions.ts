export default { points, equip, buy, gacha };
import { reactClicked } from "./App.jsx";
//création des énumérations
enum fish {
  "Baleine" = 0,
  "poissonBasique" = 1,
  "poissonColorer" = 2,
  "poissonRouge" = 3,
}

enum ocean {
  corail,
  algue,
}

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
  let chiffre = Math.random() * 5 * stat.poissonSup;
  if (chiffre > 3) {
    return;
  } else if (chiffre > 2) {
    return;
  } else {
    return 1;
  }
}


type mission = {
  num: number;
  obj: boolean;
  desc: string;
}

enum missions {
  cinqPoissons,
  centPoissons,
  millePoissons,
  acheteCinq,
  acheteCent,
  acheteMille,
  baleine
}

const cheater = {num: 1, obj:false, desc:"Essayer d'inspecter l'élément"}

const cliqueGauche = {num: 2, obj: false, desc:"Clique Gauche"}

const fullscreen = {num: 3, obj:false, desc:"Entrer en fullscreen"}

const speedClick = {num: 4, obj:false, desc: "Cliquer 5 fois en moins d'une seconde"}

const reactLearn = {num: 5, obj: reactClicked, desc: "Cliquer sur React"}

const viteLearn = {num: 6, obj:false, desc: "Cliquer sur Vite"}

enum achievements {
  cheater,
  cliqueGauche,
  fullscreen,
  speedClick,
  reactLearn,
  viteLearn,
}



function equip(item: cap) {}

function buy(augment: augment) {}
