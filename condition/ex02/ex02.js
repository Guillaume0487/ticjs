let userChoice = prompt("Choisissez une boisson:\n(Café/ Thé/ eau)").toLowerCase();

switch (userChoice) {
    case "café":
        console.log("Merci d'avoir pris la meilleur boisson du monde.")
        break;

    case "thé":
        console.log("Voici votre thé.")
        break;

    case "eau":
        console.log("L'eau c'est fort ça porte les bateaux.")
        break;

    default:
        console.log("Ca n'est pas dans la liste.")
        break;
}