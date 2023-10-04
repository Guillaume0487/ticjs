let longueurChaine = (chaine) => {
    let i = 0
    while (chaine[i]) {
        i++
    }
    return i
}

alert(`Le nom Guillaume contien ${longueurChaine("Guillaume")} lettres`)