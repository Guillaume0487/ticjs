// bonus n°1
// le juste prix: créer tableau contenant 10 nombre à 4 ou 3 chiffre. sélectionner un aléatoire (grâce à une fonction) puis demandez à l'utilisateur, via un prompt, quel nombre il pense. à chaque essais de l'utilisateur, le programme lui dit si la réponse est plus grande ou plus petite (à l'aide d'une fonction). si l'utilisateur trouve le nombre exacte il gagne la partie. par contre, si il se trompe 7 fois, il perd la partie. ce programme comprend MINIMUM deux fonctions mais peut en contenir plus.
let creatNum = () => {
    const Tab = [1234, 432, 956, 1123, 9876, 324, 556, 788, 990, 9999]
    const randomNum = Tab[Math.floor(Math.random() * Tab.length)]
    return randomNum
}

function askQuestion(num, cbt) {
    let userNum = parseInt(prompt("Devine le nombre aléatoire\nVous avez " + cbt + " essais"))
    if (userNum === num)
        return true
    cbt--
    if (cbt < 1)
        return false
    else if (userNum > num)
        alert("Le nombre est plus petit")
    else
        alert("Le nombre est plus grand")
    return askQuestion(num, cbt)
}

let winLose = (res) => {
    res === true ? alert("Vous avez gagnée") : alert("Vous avez perdue")
}

function main() {
    const numero = creatNum()
    let essais = 7
    const result = askQuestion(numero, essais)
    winLose(result)
}

main()