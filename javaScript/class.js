// calculer la moyenne de chaque etudiant
const moyenne = (notes) => {
  let sum = 0;
  for (let note of notes) {
    sum = sum + note;
  }

  return sum / notes.length;
};

class Student {
  ecole = "EMIT";
  _notes = []

  static moyenne = 10

  constructor(firstname, lastname) {
    (this.firstname = firstname), (this.lastname = lastname);
  }

  set notes(v){
    if(Array.isArray(v)){
        this._notes = v
    }
  }

  get name(){
    return `${this.firstname} ${this.lastname}`
  }

  canPass (){
    return moyenne(this._notes) >= moyenne
  }
}

const jonica = new Student("Jonica", "Henintsoa");
const jane = new Student("Jane", "DOE");
jonica.notes = [13, 11, 12]
jane.notes = [11, 10, 8]
console.log(jonica.name)
console.log(jonica.canPass(), jane.canPass());