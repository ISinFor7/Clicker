export default { points, equip, buy, gacha }

enum cap {
    Arpon,canneBasique,cannePrenium
}
enum fish {
  Baleine,poissonBasique,poissonColorer,poissonRouge

}
type inv = {
  [key: string]: cap;
};
type joueur = {
  equiped: cap;
  nb_poissons: number;
  nb_coraux: number;
  nb_dechets: number;
};
function points() {
    return 1
}

function equip(item) {

}

function buy(augment) {

}

function gacha() {

}
