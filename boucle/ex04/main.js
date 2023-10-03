let notes = prompt("Entrez la note de l'éleve");
const notesLst = notes.split(',')
console.log(notesLst);

let moyenne = 0;
notesLst.forEach(element => {
    moyenne += parseInt(element);
});

moyenne /= notesLst.length;
alert("La moyenne de l'éleve est : " + moyenne)