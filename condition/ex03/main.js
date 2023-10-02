let nombre = Math.floor(Math.random() * 5) + 1;
console.log(nombre);

const animals= {
    1 : "chien",
    2 : "chat",
    3 : "poule",
    4 : "vache",
    5 : "mouton"
}

let devine = prompt("Le quel de ces animaux corespond à ce nombre ? >>> " + nombre + "\n" + Object.values(animals)).toLocaleLowerCase();

devine == animals[nombre] ? console.log("Bienjoué") : console.log("Ratté");