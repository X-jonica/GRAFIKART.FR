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


const compteur = document.querySelector("#compteur") as HTMLElement
let i = 0

const increment = (e: Event) => {
    e.preventDefault()
    i++
    const span = compteur?.querySelector("span")
    if(span){
        span.innerText = i.toString()
    }
}

compteur?.addEventListener("click", increment) //ajouter une "addEventListener" si compteur existe
