let notes = [];
let nbrNotes = parseInt(prompt("Combiens de notes voulez vous entrer ?"));
for (let i = 0; i < nbrNotes; i++) {
    notes.push(parseInt(prompt("Entrez la note de l'éleve")));
}

let moyenne = 0;
notes.forEach(element => {
    moyenne += element;
});

moyenne /= notes.length;
alert("La moyenne de l'éleve est : " + moyenne)