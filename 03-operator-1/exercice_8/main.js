let salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
  loisirs; 

let pourcentageLoyer,
  pourcentageNourriture,
  pourcentageLoisirs,
  pourcentageAutres,
  pourcentageTotalDepenses;

// Ecrivez votre code ici
let salaireMensuel=(500*10)/100 ;
let loyer=(salaireMensuel*30)/100;
let nourriture=(salaireMensuel*20)/100;
let transport=(salaireMensuel*10)/100;
let autresDepenses=50+25;
let totalDepenses=(loyer+nourriture+transport+autresDepenses)+loisirs;
let reste = salaireMensuel-totalDepenses;
let loisirs=(salaireMensuel*15)/100;

// Calcul du pourcentage pour chaque dépense
let pourcentageLoyer = (loyer / salaireMensuel) * 100;
let pourcentageNourriture = (nourriture / salaireMensuel) * 100;
let pourcentageTransport = (transport / salaireMensuel) * 100;
let pourcentageLoisirs = (loisirs / salaireMensuel) * 100;
let pourcentageAutres = (autresDepenses / salaireMensuel) * 100;
let pourcentageTotalDepenses = pourcentageLoyer+pourcentageNourriture+pourcentageTransport+pourcentageLoisirs+pourcentageAutres

// Condition
if (pourcentageTotalDepenses > 90) {
  console.log("⚠️ Dépenses trop élevées, réduisez vos charges !");
}

// Affichage
console.log("Répartition des dépenses (% du salaire de 500€) :");
console.log("Loyer : " + pourcentageLoyer.toFixed(2) + "%");
console.log("Nourriture : " + pourcentageNourriture.toFixed(2) + "%");
console.log("Transport : " + pourcentageTransport.toFixed(2) + "%");
console.log("Loisirs : " + pourcentageLoisirs.toFixed(2) + "%");
console.log("Autres dépenses : " + pourcentageAutres.toFixed(2) + "%");
console.log("----------------------------");
console.log("Total des dépenses : " + totalDepenses + "€ (" + pourcentageTotal.toFixed(2) + "%)");
console.log("Reste après dépenses : " + (salaire - totalDepenses) + "€");

// Ne pas modifier le code ci-dessous
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};
