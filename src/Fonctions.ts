export default { points, equip, buy, gacha };

//création des énumérations
enum nom_cap {
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

enum stat {
  poissonSup,
}

//création des cannes à pêche
const canneBasique: cap = {
  nom: "canneBasique",
  stat: stat.poissonSup,
  percent: 5,
};

const j1: joueur = {
  equiped: canneBasique,
  nb_coraux: 0,
  nb_dechets: 0,
  nb_poissons: 0,
};

type cap = {
  nom: string;
  stat: stat;
  percent: number;
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
};

function points() {
  let chiffre = Math.random() * 5;
  if (chiffre > 3) {
    return;
  }
  return 1;
}

function equip(item: cap) {}

function buy(augment: augment) {}

function gacha() {}

function inventory() {
  return (
      <div style={{padding: "20px", fontFamily: "Arial, sans-sherif"}}>
          <h1>Inventaire</h1>
          {inventory.length===0 ? (
              <p>Aucun objet dans l'inventaire.</p>
          ) : (
              <ul>
                  {inventory.map((item, index) => (
                      <li key={index}>{item}</li>
                  ))}
              </ul>
          )}
      </div>
  );
}