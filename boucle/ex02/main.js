let userNumber = parseInt(prompt("Entrez un chiffre"));

for (let number = 1; number <= userNumber; number++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}  