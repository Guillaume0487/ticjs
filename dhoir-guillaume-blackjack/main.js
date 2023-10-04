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

function game(player, croupier, card_list) {
    while (true) {
        if (card_list.length < 1){
            alert("il n'y a plus de carte")
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
            alert("il n'y a plus de carte")
            break
        }
        else if (someCard(croupier) > someCard(player))
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
    if (someCard(croupier) > someCard(player))
        return false
    else if
        (someCard(croupier) < someCard(player))
        return true
    else
        return null
}

let refresh = () => {
    let card_list = [
        1,2,3,4,5,6,7,8,9,10,10,10,10,
        1,2,3,4,5,6,7,8,9,10,10,10,10,
        1,2,3,4,5,6,7,8,9,10,10,10,10,
        1,2,3,4,5,6,7,8,9,10,10,10,10,
    ]
    return card_list
}

function main(lst) {
    console.log(lst);
    if (lst.length < 1)
        lst = refresh()
    lst.sort(() => (Math.random() > 0.5) ? 1 : -1) // mélange les cartes
    let player = []
    let croupier = []
    for (let i = 0; i < 2; i++) { // les joueurs pioche 2 cartes
        piocher(player, lst)
        piocher(croupier, lst)
    }
    let test = game(player, croupier, lst)
    if (test === null)
        alert(`Egalité parfaite\n\nplayer : ${player} (${someCard(player)})\ncroupier : ${croupier} (${someCard(croupier)})`)
    else if (test === false)
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
    replay === 'y' ? main(lst) : alert("Aurevoir")
}

main(refresh())