export default { points, equip, buy, gacha }

enum cap {
    
}
enum fish {

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
