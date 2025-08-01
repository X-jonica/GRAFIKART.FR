class Personne {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  sePresenter() {
    return `Bonjour je suis ${this.name} et j'ai ${this.age} ans`;
  }
}

const p = new Personne("jonica Henintsoa", 21);
console.log(p.sePresenter());

class CompteBancaire {
  constructor(name) {
    (this.name = name), (this._solde = 0);
  }

  set deposer(v) {
    return (this._solde += v);
  }

  set retirer(v) {
    if (this._solde >= v) {
      return (this._solde -= v);
    }
  }

  get afficherSolde() {
    return `Votre solde est : ${this._solde}`;
  }
}

const compte = new CompteBancaire("Henintsoa");
console.log(compte.afficherSolde);
compte.deposer = 100;
console.log(compte.afficherSolde);
compte.retirer = 30;
console.log(compte.afficherSolde);

class Employe {
  constructor(nom, poste) {
    (this.nom = nom), (this.poste = poste);
  }

  get decrire() {
    return `${this.nom} travaille comme ${this.poste}`;
  }
}

const emp1 = new Employe("Lova", "Développeur");
const emp2 = new Employe("Tina", "Designer");
console.log(emp1.decrire, emp2.decrire);

class Manager extends Employe {
  constructor(nom, poste, equipe) {
    super(nom, poste), (this.equipe = equipe.length);
  }

  get gerer() {
    return `${this.nom}, ${this.poste} gère une equipe de ${this.equipe} personnes`;
  }
}

const mgr = new Manager("Jonica", "Chef de projet", [emp1, emp2]);
console.log(mgr.gerer);
