let notes = prompt("Entrez les notes de l'éleve séparée par des virgules (,)").split(',');
let moyenne = 0;
notes.forEach(element => {
    moyenne += parseInt(element);
});

moyenne /= notes.length;
alert("La moyenne de l'éleve est : " + moyenne)