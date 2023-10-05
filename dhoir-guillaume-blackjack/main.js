let card_list = [
    11,2,3,4,5,6,7,8,9,10,10,10,10,
    11,2,3,4,5,6,7,8,9,10,10,10,10,
    11,2,3,4,5,6,7,8,9,10,10,10,10,
    11,2,3,4,5,6,7,8,9,10,10,10,10,
] // crée une liste de nombre appelé card_list

let piocher = (player, card_list) => { // crée la fonction flèché piocher avec en parametre les listes (player, card_list)
    let randomCard = Math.floor(Math.random() * card_list.length) // stock dans la variable randomCard un index aléatoire de card_list
    player.push(card_list[randomCard]) // ajoute la valeur de card_list à l'index randomCard dans la liste player
    card_list.splice(randomCard, 1) // suprime un seul element de card_list à l'index randomCard
    return player // retourne la valeur de la liste player
}

let someCard = (player) => { // crée la fonction flèché someCard avec en parametre la liste player
    let some = 0 // crée la variable some avec la valeur 0
    for (let i = 0; i < player.length; i++) { // pour l'index i avec la valeur 0, tant que l'index i est plus petit que la taille de la liste player la boucle sera lancer et l'index i sera incrémenté de 1 à chaque tour de la boucle
        some += player[i]; // j'ajoute à la valeur de some la valeur de l'element de la liste player à l'index i
    }
    return some // retourne la valeur de la variable some
}

let asCard = (lst) => { // change la valeur de l'as si la somme des cartes du joueur entrer en parametre
    if (someCard(lst) > 21) { // si la somme des cartes de (lst) est superieur a 21 entre dans le if
        for (let i = 0; i < lst.length; i++) { // parcoure toute la liste (lst)
            if (lst[i] === 11) { // si l'element de la liste (lst) à l'index i est strictement égale à 11 entre dans le if
                lst[i] = 1
                break
            }
        }
    }
}

let piocheChance = () => { // returne true ou false de manière aléatoire
    let croupierPioche = [true, false]
    return croupierPioche[Math.floor(Math.random() * croupierPioche.length)]
}

function game(player, croupier, card_list) { // fonction dans la que le jeu tourne et revoie un booleen pour savoir si le joueur à gagner ou non
    while (true) { // tant que vrais la boucle tourne elle peut etre stoper par break
        if (card_list.length < 1){ // si la taille de card_list est plus petit que 1
            alert("Vous ne pouvez pas piocher, il n'y a plus de carte")
            break
        }
        let pioche = prompt(`joueur : ${player} (${someCard(player)})\ncroupier : ${croupier[0]}🀆\n\nVoulez vous piocher ? (y/n)`).toLocaleLowerCase();
        if (pioche !== 'y' && pioche !== 'n') { // si pioche est différent de 'Y' et 'n'
            while (true) { // tant que vrais la boucle tourne elle peut etre stoper par break
                pioche = prompt(`joueur : ${player} (${someCard(player)})\ncroupier : ${croupier[0]}🀆\n\nVous pouvez que répondre par 'y' ou 'n' (y/n)`).toLocaleLowerCase()
                if (pioche === 'y' || pioche === 'n') // si pioche est strictement égale à 'y' ou 'n'
                    break
            }
        }
        if (pioche === 'y') { // si pioche est strictement égale à 'y'
            piocher(player, card_list)
            if (someCard(player) > 21) { // si la somme des cartes de player est plus grand que 21
                asCard(player) // change la valeur d'un as si il y en a un
                if (someCard(player) > 21) // si la somme des carte de player est plus grand que 21
                    return false
            }
            if (someCard(player) === 21) // si la somme des cartes de player est strictement égale à 21
                return true
        } else if (pioche === 'n'){  // sinon si pioche est strictement égale à 'n'
            if (someCard(player) === 21) // si la somme des cartes de player est strictement égale à 21
                return true
            else // sinon
                break
        }
    }
    while (true) { // tant que vrais la boucle tourne elle peut etre stoper par break
        if (card_list.length < 1){ // si la taille de card_list est plus petit que 1
            alert("Le croupier ne peut pas piocher, il n'y a plus de carte")
            break
        }
        if (someCard(croupier) > 21) { // si la somme des cartes du croupier est plus grand que 21
            asCard(croupier) // change la valeur d'un as si il y en a un
                if (someCard(croupier) > 21) // si la somme des cartes du croupier est plus grand que 21
                    return true
        }
        if (someCard(croupier) < 17) // si la somme des cartes du croupier est plus petite que 17
            piocher(croupier, card_list)
        else if (someCard(croupier) > someCard(player)) // sinon si la somme des cartes du croupier est plus grand que celle du joueur
            return false
        else if (someCard(croupier) === 21) // sinon si la somme des cartes du croupier est strictement égale à 21
            return false
        if (someCard(croupier) >= 17 && someCard(croupier) < someCard(player)) { // si la somme des cartes du croupier est plus grand ou égale à 17 et plus petit que la somme des cartes du joueur
            if (piocheChance()) // si la fonction piocheChance est vrais
                piocher(croupier, card_list)
            else // sinon
                return true
        } else if (someCard(croupier) === someCard(player)) { // sinon si la somme des cartes du croupier est strictement égale à celle du joueur
            if (piocheChance()) // si la fonction piocheChance est vrais
                piocher(croupier, card_list)
            else // sinon
                return null
        }
    }
    if (someCard(croupier) === someCard(player)) // sinon si la somme des cartes du croupier est strictement égale à celle du joueur
        return null
    if (someCard(croupier) > someCard(player)) // si la somme des cartes du croupier est plus grand que celle du joueur
        return false
    else if (someCard(croupier) < someCard(player)) // si la somme des cartes du croupier est plus petit que celle du joueur
        return true
    else // sinon
        return false
}

function main(lst) { // fonction qui démmare le jeu
    lst.sort(() => Math.random() - 0.5) // mélange les cartes
    let player = []
    let croupier = []
    if (lst.length >= 4) { // si la taille de lst est plus grand ou égale à 4
        for (let i = 0; i < 2; i++) { // les joueurs pioche 2 cartes
            piocher(player, lst)
            piocher(croupier, lst)
        }
    } else { // sinon
        alert("il n'y a plus asser de cartes")
        return
    }
    let verif = game(player, croupier, lst)
    if (verif === null) // si verif est strictement égale à null
        alert(`Egalité parfaite\n\nplayer : ${player} (${someCard(player)})\ncroupier : ${croupier} (${someCard(croupier)})`)
    else if (verif === false) // si verif est strictement égale à faux
        alert(`Vous avez perdue\n\nplayer : ${player} (${someCard(player)})\ncroupier : ${croupier} (${someCard(croupier)})`)
    else // sinon
        alert(`Vous avez gagnée\n\nplayer : ${player} (${someCard(player)})\ncroupier : ${croupier} (${someCard(croupier)})`)
    if (lst.length >= 4) { // si la taille de lst est plus grand ou égale à 4
        let replay = prompt("Voulez vous rejouer ? (y/n)").toLocaleLowerCase()
        if (replay !== 'y' && replay !== 'n'){ // si replay est strictement différent de 'y' et 'n'
            while (true) { // tant que vrais la boucle tourne elle peut etre stoper par break
                replay = prompt("Vous pouvez répondre que par 'y' ou par 'n'\n\nVoulez vous rejouer ? (y/n)").toLocaleLowerCase()
                if (replay === 'y' || replay === 'n') // si replay est strictement égale à 'y' ou 'n'
                    break
            }
        }
        replay === 'y' ? main(lst) : alert("Aurevoir") // si replay est strictement égale à 'y' fais la fonction main avec une liste en parametre sinon fais une alerte avec le message "Aurevoir"
    } else { // sinon
        alert("il n'y a plus asser de cartes pour relancer une partie")
        return
    }
}

main(card_list) // start