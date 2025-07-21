"use strict";
// DECLARATION AVEC TYPESCRIPT
const a = "Hello";
const n = 3;
const b = true;
const d = null;
const arr = ["hello", "world"];
const all = ["bonjour", 2, true, "tous le monde"]; //avec 'any' on peux mettre tous dans  une variable ou tableau
const user = {
    firstname: "John",
    lastname: "doe",
}; //le point d'interrogation veux dire otionnel
const voiture = {
    marque: "Mercedes",
    couleur: "noire",
    modele: "recent",
};
const date = new Date();
const db = (e) => {
    return 3;
}; //le mot cle "void" signifie qu on se fous completemlent des retours
function printId(id) {
    console.log(id.toString());
}
// il se peut que typescrit ne connais pas le tye d un element
// const compteur = document.querySelector("#compteur") as HTMLButtonElement; //  c' estpour indiquer a Typescreipt qu il s'agit d une Buutton HtML
const compteur = document.querySelector("#compteur");
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener("click", increment); //ajouter une "addEventListener" si compteur existe
