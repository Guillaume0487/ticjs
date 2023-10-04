let division = (a, b) => {
        alert(a + " : " + b + " = " + (a / b))
        return a / b
}

let nbr1 = 5
let nbr2 = 0
nbr2 === 0 ? alert("Division par zero impossible") : division(nbr1, nbr2)