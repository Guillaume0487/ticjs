const semaine = {
    1 : "Lundi",
    2 : "Mardi",
    3 : "Mercredi",
    4 : "Jeudi",
    5 : "Vendredi",
    6 : "Samedi",
    7 : "Dimanche"
}

let user = prompt("saisissez un numéro de 1 à 7, représentant un jour de la semaine");

if (0 < user && user < 8)
{
    console.log("le chiffre " + user + " équivaut à " + semaine[user]);
} else
{
    console.log("Ce chiffre n'est pas valide")
}