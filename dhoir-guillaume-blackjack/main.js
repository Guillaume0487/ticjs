let card_list = [
    1,2,3,4,5,6,7,8,9,10,10,10,10,
    1,2,3,4,5,6,7,8,9,10,10,10,10,
    1,2,3,4,5,6,7,8,9,10,10,10,10,
    1,2,3,4,5,6,7,8,9,10,10,10,10,
]

let piocher = (player, card_list) => {
    let randomCard = Math.floor(Math.random() * card_list.length)// séléctionne une carte aléatoir => randomCard
    player.push(card_list[randomCard]) // donne la carte aléatoire au joueur
    card_list.splice(randomCard, 1) // suprime la carte aléatoire du paquet de carte
    return player
}

let someCard = (player) => {
    let some = 0
    for (let i = 0; i < player.length; i++) {
        some += player[i]; // j'ajoute à some l'element à l'index (i) du tableau entré en parametre
    }
    return some
}

let croupierCard = (croupier) => {
    let numberCard = ""
    for (let i = 0; i < croupier.length - 1; i++) {
        numberCard += '🀆'; //ajoute un symbol '🀆' à numberCard tant que (i) est inferieur à la taille du (tableau - 1)
    }
    return numberCard
}

let piocheChance = () => {
    let croupierPioche = [true, false]
    return croupierPioche[Math.floor(Math.random() * croupierPioche.length)] // choisie un des deux element de la liste au dessue en le retourne
}

function game(player, croupier, card_list) {
    while (true) {
        if (card_list.length < 1){
            alert("Vous ne pouvez pas piocher, il n'y a plus de carte")
            break
        }
        let pioche = prompt(`joueur : ${player} (${someCard(player)})\ncroupier : ${croupier[0]}${croupierCard(croupier)}\n\nVoulez vous piocher ? (y/n)`).toLocaleLowerCase();
        if (pioche !== 'y' && pioche !== 'n') {
            while (true) { // le joueur entre dans cet boucle infinit si il rentre autre chose que ('y') ou ('n')
                pioche = prompt(`joueur : ${player} (${someCard(player)})\ncroupier : ${croupier[0]}${croupierCard(croupier)}\n\nVous pouvez que répondre par 'y' ou 'n' (y/n)`).toLocaleLowerCase()
                if (pioche === 'y' || pioche === 'n')
                    break // casse la boucle si (pioche) est strictement egale à ('y') ou ('n')
            }
        }
        if (pioche === 'y') {
            piocher(player, card_list)
            if (someCard(player) === 21)
                return true
            else if (someCard(player) > 21)
                return false
        } else if (pioche === 'n')
            break
    }
    while (true) {
        if (card_list.length < 1){
            alert("Le croupier ne peut pas piocher, il n'y a plus de carte")
            break
        }
        if (someCard(croupier) > 21)
            return true
        else if (someCard(croupier) > someCard(player))
            return false
        else if (someCard(croupier) === 21)
            return false
        else if (someCard(croupier) >= 17 && someCard(croupier) < someCard(player)) {
            if (piocheChance())
                piocher(croupier, card_list)
            else
                return true
        } else if (someCard(croupier) === someCard(player)) {
            if (piocheChance())
                piocher(croupier, card_list)
            else
                return null
        } else if (someCard(croupier) < 17){
            piocher(croupier, card_list)
        }
    }
    if (someCard(croupier) > someCard(player))
        return false
    else if
        (someCard(croupier) < someCard(player))
        return true
    else
        return null
}

function main(lst) {
    lst.sort(() => Math.random() - 0.5) // mélange les cartes
    let player = []
    let croupier = []
    if (lst.length >= 4) {
        for (let i = 0; i < 2; i++) { // les joueurs pioche 2 cartes
            piocher(player, lst)
            piocher(croupier, lst)
        }
    } else {
        alert("il n'y a plus asser de cartes")
        return
    }
    let test = game(player, croupier, lst)
    if (test === null)
        alert(`Egalité parfaite\n\nplayer : ${player} (${someCard(player)})\ncroupier : ${croupier} (${someCard(croupier)})`)
    else if (test === false)
        alert(`Vous avez perdue\n\nplayer : ${player} (${someCard(player)})\ncroupier : ${croupier} (${someCard(croupier)})`)
    else
        alert(`Vous avez gagnée\n\nplayer : ${player} (${someCard(player)})\ncroupier : ${croupier} (${someCard(croupier)})`)
    if (lst.length >= 4) {
        let replay = prompt("Voulez vous rejouer ? (y/n)").toLocaleLowerCase()
        if (replay !== 'y' && replay !== 'n'){
            while (true) {
                replay = prompt("Vous pouvez répondre que par 'y' ou par 'n'\n\nVoulez vous rejouer ? (y/n)").toLocaleLowerCase()
                if (replay === 'y' || replay === 'n')
                    break
            }
        }
        replay === 'y' ? main(lst) : alert("Aurevoir")
    } else {
        alert("il n'y a plus asser de cartes pour relancer une partie")
        return
    }
}

main(card_list)