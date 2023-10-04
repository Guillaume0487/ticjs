let piocher = (player, card_list) => {
    let randomCard = card_list[Math.floor(Math.random() * card_list.length)] // séléctionne une carte aléatoir => randomCard
    player.push(randomCard) // donne la carte aléatoire au joueur
    card_list.splice(randomCard, 1) // suprime la carte aléatoire
    return player
}

function someCard(player) {
    let some = 0
    for (let i = 0; i < player.length; i++) {
        some += player[i];
    }
    return some
}

function croupierCard(croupier) {
    let numberCard = ""
    for (let i = 0; i < croupier.length - 1; i++) {
        numberCard += '▮';
    }
    return numberCard
}

function game(player, croupier, card_list) {
    let pioche = prompt(`joueur : ${player} (${someCard(player)})\ncroupier : ${croupier[0]}${croupierCard(croupier)}\n\nVoulez vous piocher ? (y/n)`);
    if (pioche !== 'y' && pioche !== 'n') {
        while (true) {
            pioche = prompt(`joueur : ${player} (${someCard(player)})\ncroupier : ${croupier[0]}${croupierCard(croupier)}\n\nVous pouvez que répondre par 'y' ou 'n' (y/n)`)
            if (pioche === 'y' || pioche === 'n')
                break
        }
    } else if (pioche === 'y') {
        piocher(player, card_list)
        if (someCard(player) === 21)
            return true
        else if (someCard(player) > 21)
            return false
    } else if (pioche === 'n')
        alert("Vous avez passée")
    if (someCard(croupier) < 17) {
        piocher(croupier, card_list)
        if (someCard(croupier) === 21)
            return false
        else if (someCard(croupier) > 21)
            return true
    }
    if (someCard(croupier) >= 17 && someCard(croupier) < someCard(player))
        return true
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
    let replay = prompt("Voulez vous rejouer ? (y/n)")
    if (replay !== 'y' && replay !== 'n'){
        while (true) {
            replay = prompt("Vous pouvez répondre que par 'y' ou par 'n'\n\nVoulez vous rejouer ? (y/n)")
            if (replay === 'y' || replay === 'n')
                break
        }
    } else if (replay === 'y')
        main()
    else
        alert("Aurevoir")
}

main()