export default { points, equip, buy, gacha };

//création des énumérations
enum fish {
  Baleine,
  poissonBasique,
  poissonColorer,
  poissonRouge,
}

enum dechet {
  cannette,
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

function equip(item: cap) {}

function buy(augment: augment) {}

function gacha() {}
<<<<<<< HEAD

function pecherPoisson(fish){
  
}
function pecherDecher(dechet){
  return dechet.cannette
}
function pecherOcean(ocean){
  const randomIndex = Math.floor(Math.random() *3);
}
=======
>>>>>>> b187cb1831cd035ca7081681c0ac992618c568db
