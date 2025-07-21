// DECLARATION AVEC TYPESCRIPT

const a:string = "Hello"
const n:number = 3
const b:boolean = true
const d:null = null
const arr:string[] = ["hello", "world"]
const all:any[] = ["bonjour", 2, true, "tous le monde"] //avec 'any' on peux mettre tous dans  une variable ou tableau 
const user:{firstname:string, lastname?: string} = {firstname:"John", lastname:"doe"} //le point d'interrogation veux dire otionnel
const voiture:{marque: string, [key: string]: string} = {marque: "Mercedes", couleur: "noire", modele:"recent"}
const date:Date = new Date()

const db:(e: MouseEvent) => void = (e: MouseEvent): number => {
 return 3
} //le mot cle "void" signifie qu on se fous completemlent des retours 


function printId(id: number):void {
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