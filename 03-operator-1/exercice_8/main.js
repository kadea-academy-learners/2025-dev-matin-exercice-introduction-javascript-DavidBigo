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
