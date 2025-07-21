"use strict";
// DECLARATION AVEC TYPESCRIPT
const a = "Hello";
const n = 3;
const b = true;
const d = null;
const arr = ["hello", "world"];
const all = ["bonjour", 2, true, "tous le monde"]; //avec 'any' on peux mettre tous dans  une variable ou tableau 
const user = { firstname: "John", lastname: "doe" }; //le point d'interrogation veux dire otionnel
const voiture = { marque: "Mercedes", couleur: "noire", modele: "recent" };
const date = new Date();
const db = (e) => {
    return 3;
}; //le mot cle "void" signifie qu on se fous completemlent des retours 
function printId(id) {
    console.log(id.toString());
}
/*
const compteur = document.querySelector("#compteur")
let i = 0

const increment = (e) => {
    i++
    compteur.querySelector("span").innerText = i.toString()
}

compteur.addEventListener("click", increment)

*/ 
