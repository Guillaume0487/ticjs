let poid = prompt("poids en Kilogramme :");
let taille = prompt("taille en centimetre :") / 100;

let imc = (poid / (taille*taille));

if (imc < 18.5)
{
    console.log("insuffisance pondérale");
}
else if (18.5 < imc && imc < 24.9)
{
    console.log("poids normal");
}
else if (25 < imc && imc < 29.9)
{
    console.log("surpoids");
}
else
{
    console.log("obésité");
}