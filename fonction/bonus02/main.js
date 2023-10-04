let meilleurEleves = (eleves) => {
    for (const eleve of Object.keys(eleves)) {
        if (eleves[eleve] > 90)
            console.log(`L'éleve ${eleve} a une note de : ${eleves[eleve]}`);
    }
}

const notesEleves = {
    "Guillaume" : 100,
    "Marie" : 96,
    "Jeanne" : 97,
    "Françoise" : 45,
    "Monique" : 66
}

meilleurEleves(notesEleves)