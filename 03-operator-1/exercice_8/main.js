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
  pourcentageTotalDepenses,
  pourcentageTransport;

// Ecrivez votre code ici
salaireMensuel=(500*10)/100 ;
loyer=(salaireMensuel*30)/100;
nourriture=(salaireMensuel*20)/100;
transport=(salaireMensuel*10)/100;
loisirs=(salaireMensuel*15)/100;
autresDepenses=50+25;
totalDepenses=(loyer+nourriture+transport+autresDepenses)+loisirs;
reste = salaireMensuel-totalDepenses;

// Calcul du pourcentage pour chaque dépense
pourcentageLoyer = (loyer / salaireMensuel) * 100;
pourcentageNourriture = (nourriture / salaireMensuel) * 100;
pourcentageTransport = (transport / salaireMensuel) * 100;
pourcentageLoisirs = (loisirs / salaireMensuel) * 100;
pourcentageAutres = (autresDepenses / salaireMensuel) * 100;
pourcentageTotalDepenses = pourcentageLoyer+pourcentageNourriture+pourcentageTransport+pourcentageLoisirs+pourcentageAutres

  reste;



// Ecrivez votre code ici
salaireMensuel = 500 ;
loyer = (salaireMensuel*30)/100;
nourriture = (salaireMensuel*20)/100;
transport = (salaireMensuel*10)/100;
autresDepenses = 50+25;
totalDepenses = loyer+nourriture+transport+autresDepenses;
reste = salaireMensuel-totalDepenses;

console.log("Total Depenses : " + totalDepenses);
console.log("Reste : " + reste);


// Condition
if (reste >= 100) {
  console.log("Budget bien géré");
} else {
  console.log("Attention, budget serré");
}

// Affichage
console.log("Répartition des dépenses (% du salaire de 500€) :");
console.log("Loyer : " + pourcentageLoyer.toFixed(2) + "%");
console.log("Nourriture : " + pourcentageNourriture.toFixed(2) + "%");
console.log("Transport : " + pourcentageTransport.toFixed(2) + "%");
console.log("Loisirs : " + pourcentageLoisirs.toFixed(2) + "%");
console.log("Autres dépenses : " + pourcentageAutres.toFixed(2) + "%");
console.log("Total des dépenses : " + totalDepenses + "€ (" + pourcentageTotalDepenses.toFixed(2) + "%)");
console.log("Reste après dépenses : " + reste + "€");
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
