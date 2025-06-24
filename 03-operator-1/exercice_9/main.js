// Ecrivez votre code ici
let maison = 60000000;
let terrains = 40000000;
let liquidités = 20000000;
let heritage = maison + terrains + liquidités;
let premiereCategorie = (heritage * 75) / 100;
let deuxiemeCategorie = (heritage * 25) / 100;

console.log("Héritage total : " + heritage + " CDF");
console.log("Première catégorie (75%) : " + premiereCategorie + " CDF");
console.log("Deuxième catégorie (25%) : " + deuxiemeCategorie + " CDF");

// Repartition Héritiers premières catégories
let paul = premiereCategorie / 3;
let marie = premiereCategorie / 3;
let eric = premiereCategorie / 3 / 2;
let clair = premiereCategorie / 3 / 2;

// Repartition Héritiers premières catégories
let madameMukuna = deuxiemeCategorie / 3;
let joseph = deuxiemeCategorie / 3;
let sarah = deuxiemeCategorie / 3;

//Afficher le resultat
console.log("Héritage total : " + heritage + " CDF");
console.log("Première catégorie (75%) : " + premiereCategorie + " CDF");
console.log("Deuxième catégorie (25%) : " + deuxiemeCategorie + " CDF");

console.log("\n--- Répartition Première Catégorie ---");
console.log("Paul : " + paul + " CDF");
console.log("Marie : " + marie + " CDF");
console.log("Eric : " + eric + " CDF");
console.log("Clair : " + clair + " CDF");

console.log("\n--- Répartition Deuxième Catégorie ---");
console.log("Madame Mukuna : " + madameMukuna + " CDF");
console.log("Joseph : " + joseph + " CDF");
console.log("Sarah : " + sarah + " CDF");

// Ne pas modifier le code ci-dessous
module.exports = {
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah,
};
