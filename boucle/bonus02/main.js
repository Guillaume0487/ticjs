let tailleTab = parseInt(prompt("Entrez la taille du tableau souhaité"));
let quantite = parseInt(prompt("Entrez une quantité, elle doit être plus grande que la taille du tableau"));
while (quantite < tailleTab) {
    quantite = parseInt(prompt("La quantité est trop petite, Entrez une autre valeur"));
}

let lst = [];
if (tailleTab < 2) {
    lst.push(quantite);
} else {
    quantite -= tailleTab;
    for (let i = 0; i < tailleTab; i++) {
        lst.push(1);
    }
    while(quantite > 0) {
        lst[Math.floor(Math.random() * lst.length)] += 1;
        quantite--;
    }
}

console.log(lst)
let test = 0;
for (let i = 0; i < lst.length; i++) {
    test += lst[i];
}

console.log(test);