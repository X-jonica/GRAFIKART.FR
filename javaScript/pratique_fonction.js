
// calcule de moyenne de chaque elee
const students = [
  {
    name: "John",
    notes: [1, 20, 18, 19, 12],
  },
  {
    name: "Jane",
    notes: [17, 18, 20, 13, 15],
  },
  {
    name: "Sophie",
    notes: [17, 12, 14, 15, 13],
  },
  {
    name: "Marc",
    notes: [2, 3, 5, 8, 9],
  },
  {
    name: "Manon",
    notes: [18, 17, 18, 19, 12],
  },
];

// comparer la moyennes  des etudiants
const comparerStudents = (a, b) => {
  return b.moyenne - a.moyenne;
};

// calculer la moyenne de chaque etudiant
const moyenne = (notes) => {
  let sum = 0;
  for (let note of notes) {
    sum = sum + note;
  }

  return sum / notes.length;
};

// Ajoouter un objet moyenne pour chaque etudiant
for (let student of students) {
  student.moyenne = moyenne(student.notes);
  student.best = Math.max(...student.notes)
  student.worst = Math.min(...student.notes)
}

// Trier les moyenne de etuduants en utilisant la fonction comparerStudents
students.sort(comparerStudents);

const formatStudents = (student) => {
  return `${student.name} avec la moyenne : ${student.moyenne}`;
};

// Afficher les 03 meilleurs etudiants
console.log(`les 03 meilleurs etudiants  : 
  1: ${formatStudents(students[0])},
  2: ${formatStudents(students[1])},
  3: ${formatStudents(students[2])}`);

console.table(students);

/*
// compter le nombre d occurence de chaque lettre dans une phrase : 
const phrase = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.`;
const alphabet = "abcdefghijklmnopqrstuvwxyz"

const compterLettre = (phrase) => {
  const preparePhrase = phrase.toLowerCase().replace(/[^a-z]/, "").split("");
  const prepareAlphabet = alphabet.split("")
  let compteur = []
  for (let lettre of prepareAlphabet) {
    let compteLettre = 0
      for(let caractere of preparePhrase){
        if (lettre === caractere){
          compteLettre++
        }
      }
      compteur.push({ [lettre]: compteLettre });
  }
  return compteur
}

console.table(compterLettre(phrase))
*/

// compter la frequence de chaque mot dans une phrase 

const phrase = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.`;

const frequences = {}
const words = phrase
              .toLocaleLowerCase()
              .replaceAll(',', '')
              .split(" ")
for(let word of words){
  if(word !== ""){
    if (frequences[word]) {
      frequences[word]++;
    } else {
      frequences[word] = 1;
    }
  }
}
// creer un tableau pour stocker les objets 
const frequencesArray = []
for (let k in frequences){
  frequencesArray.push({
    word: k,
    count: frequences[k]
  })
}

// trier le tableau par les mots le plus utilisés
frequencesArray.sort((a, b) => b.count - a.count)

console.log(
  `les mots les plus frequents son : "${frequencesArray[0].word}", "${frequencesArray[1].word}", ${frequencesArray[2].word}`
);

console.log(frequencesArray)