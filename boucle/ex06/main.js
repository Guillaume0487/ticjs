let motDePasse = ["password", "azerty", "1234", "123456789"];
let motDePasseAleatoire = motDePasse[Math.floor(Math.random() * motDePasse.length)];

do {
    var user = prompt("Trouve le mot de passe\nIndice : " + motDePasseAleatoire.length + " lettres");
} while (user !== motDePasseAleatoire);

if (user === motDePasseAleatoire) {
    alert("Vous avez trouvée le mot de Passe : " + motDePasseAleatoire)
}