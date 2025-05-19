let salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
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
