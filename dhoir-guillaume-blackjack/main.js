let piocher = (player, card_list) => {
    console.log(card_list);
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
    return some === 21
}

function game(player, croupier, card_list) {
    let pioche = prompt(`joueur : ${player}\ncroupier : ${croupier[0]}\n\nVoulez vous piocher ? (y/n)`);
    if (pioche === 'y') {
        piocher(player, card_list)
        if (someCard(player))
            return true
    } else if (pioche === 'n')
        alert("Vous avez passée")
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
    game(player, croupier, card_list)
    
}

main()