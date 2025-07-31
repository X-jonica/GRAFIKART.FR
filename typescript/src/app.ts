// DECLARATION AVEC TYPESCRIPT

const a: string = "Hello";
const n: number = 3;
const b: boolean = true;
const d: null = null;
const arr: string[] = ["hello", "world"];
const all: any[] = ["bonjour", 2, true, "tous le monde"]; //avec 'any' on peux mettre tous dans  une variable ou tableau
const user: { firstname: string; lastname?: string } = {
   firstname: "John",
   lastname: "doe",
}; //le point d'interrogation veux dire otionnel
const voiture: { marque: string; [key: string]: string } = {
   marque: "Mercedes",
   couleur: "noire",
   modele: "recent",
};
const date: Date = new Date();

const db: (e: MouseEvent) => void = (e: MouseEvent): number => {
   return 3;
}; //le mot cle "void" signifie qu on se fous completemlent des retours

function printId(id: number | string): void {
   console.log(id.toString());
}

// il se peut que typescrit ne connais pas le tye d un element
// const compteur = document.querySelector("#compteur") as HTMLButtonElement; //  c' estpour indiquer a Typescreipt qu il s'agit d une Buutton HtML

const compteur = document.querySelector("#compteur") as HTMLElement;
let i = 0;

const increment = (e: Event) => {
   e.preventDefault();
   i++;
   const span = compteur?.querySelector("span");
   if (span) {
      span.innerText = i.toString();
   }
};

compteur?.addEventListener("click", increment); //ajouter une "addEventListener" si compteur existe

// le NARROWING : typescrit va devinner en foncstion du paramettre qu on a attribuer a une fonction

function displayId(id: string | number) {
   if (typeof id === "number") {
      console.log(id * 3);
   } else {
      console.log(id.toUpperCase()); //ici typescript sait que a est un string car dans le prochain conditon c etait deja un number
   }
}

// deuxieme exemple 
function exemple(a: string | boolean, b: string | number | boolean){
    if(a === b){
        console.log(a); //doc ici typpescript va deiner que a serat soit "string | boolean" car ce sont les deux intercection entre a et b
    }
}

// troisieme exemple cas d un tableau
function autreExemple(a: string | string[]){
    if(Array.isArray(a)){
        return a[0] //tyescript va comprendre que a est ici un tableau
    }
    return
}


// prochain exemple 
function prochainExemple(a: HTMLInputElement | MouseEvent){
    if("value" in  a){
        console.log(a); //ici typescript va comrendre que a est une "HTMLinputelement parce que value se truve dans une lement inpu en HTML "
    }
}

// prochaine autre exemple 
function isDate(a: any): a is Date{
    return a instanceof Date
}

function example(a: Date | HTMLInputElement){
    if (isDate(a)){
        a //c est logique que a ici est une Date
    }
}

