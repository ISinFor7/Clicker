export default { points, equip, buy, gacha };

enum nom_cap {
  canneBasique,
  cannePrenium,
  Arpon,
}
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
type cap = {
  nom: nom_cap;
  buff: string;
};
type inv = [cap, ...cap[]];
type joueur = {
  equiped: cap;
  nb_poissons: number;
  nb_coraux: number;
  nb_dechets: number;
};
function points() {
  return 1;
}

function equip(item) {}

function buy(augment) {}

function gacha() {}
