const animaux = ["chevale", "souris", "chat", "chien"];
let ask_question = prompt("Entrez un nom d'animal").toLowerCase();
switch (ask_question) {
    case animaux[0]:
        alert(ask_question + " Trouvé");
        break;

    case animaux[1]:
        alert(ask_question + " Trouvé");
        break;

    case animaux[2]:
        alert(ask_question + " Trouvé");
        break;

    case animaux[3]:
        alert(ask_question + " Trouvé");
        break;

    default:
        alert("Non trouvé")
        break;
}