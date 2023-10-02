let user = prompt("Quel est votre saison préférée ?\nPrintemps/ Été/ Automne/ Hiver").toLocaleLowerCase();

switch (user) {
    case "printemps":
        console.log("vive le " + user);
        break;

    case "été":
        console.log("il fait trop chaud en " + user);
        break;

    case "automne":
        console.log("l'" + user + " c'est pas ouf");
        break;

    case "hiver":
        console.log("l'" + user + " c'est froid mais au mois c'est beau");
        break;

    default:
        console.log("\"" + user + "\" n'est pas une saison")
        break;
}