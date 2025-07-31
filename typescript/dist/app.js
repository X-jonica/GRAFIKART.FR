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
// le NARROWING : typescrit va devinner en foncstion du paramettre qu on a attribuer a une fonction
function displayId(id) {
    if (typeof id === "number") {
        console.log(id * 3);
    }
    else {
        console.log(id.toUpperCase()); //ici typescript sait que a est un string car dans le prochain conditon c etait deja un number
    }
}
// deuxieme exemple 
function exemple(a, b) {
    if (a === b) {
        console.log(a); //doc ici typpescript va deiner que a serat soit "string | boolean" car ce sont les deux intercection entre a et b
    }
}
// troisieme exemple cas d un tableau
function autreExemple(a) {
    if (Array.isArray(a)) {
        return a[0]; //tyescript va comprendre que a est ici un tableau
    }
    return;
}
// prochain exemple 
function prochainExemple(a) {
    if ("value" in a) {
        console.log(a); //ici typescript va comrendre que a est une "HTMLinputelement parce que value se truve dans une lement inpu en HTML "
    }
}
// prochaine autre exemple 
function isDate(a) {
    return a instanceof Date;
}
function example(a) {
    if (isDate(a)) {
        a; //c est logique que a ici est une Date
    }
}
