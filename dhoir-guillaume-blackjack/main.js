let piocher = (player, card_list) => {
    let randomCard = card_list[Math.floor(Math.random() * card_list.length)] // séléctionne une carte aléatoir => randomCard
    player.push(randomCard) // donne la carte aléatoire au joueur
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

function game(player, croupier, card_list) {
    while (true) {
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
        if (someCard(croupier) > someCard(player))
            return false
        else if (someCard(croupier) < 17) {
            piocher(croupier, card_list)
            if (someCard(croupier) === 21)
                return false
            else if (someCard(croupier) > 21)
                return true
        } else
            break
        if (someCard(croupier) >= 17 && someCard(croupier) < someCard(player))
            return true
    }
    return game(player, croupier, card_list)


}

function main() {
    let card_list = [
        1,2,3,4,5,6,7,8,9,10,10,10,10,
        1,2,3,4,5,6,7,8,9,10,10,10,10,
        1,2,3,4,5,6,7,8,9,10,10,10,10,
        1,2,3,4,5,6,7,8,9,10,10,10,10,
    ].sort(() => (Math.random() > 0.5) ? 1 : -1) // mélange les cartes
    let player = []
    let croupier = []
    for (let i = 0; i < 2; i++) { // les joueurs pioche 2 cartes
        piocher(player, card_list)
        piocher(croupier, card_list)
    }
    let test = game(player, croupier, card_list)
    if (test === false)
        alert(`Vous avez perdue\n\nplayer : ${player} (${someCard(player)})\ncroupier : ${croupier} (${someCard(croupier)})`)
    else
        alert(`Vous avez gagnée\n\nplayer : ${player} (${someCard(player)})\ncroupier : ${croupier} (${someCard(croupier)})`)
    let replay = prompt("Voulez vous rejouer ? (y/n)").toLocaleLowerCase()
    if (replay !== 'y' && replay !== 'n'){
        while (true) {
            replay = prompt("Vous pouvez répondre que par 'y' ou par 'n'\n\nVoulez vous rejouer ? (y/n)").toLocaleLowerCase()
            if (replay === 'y' || replay === 'n')
                break
        }
    }
    replay === 'y' ? main() : alert("Aurevoir")
}

main()