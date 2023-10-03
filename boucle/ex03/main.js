let user = prompt("Entrez un mot");
let mot = ""
for (let i = user.length - 1; i > -1; i--) {
    mot += user[i];
}