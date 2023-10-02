let user = parseInt(prompt("Entrez une année de votre choix :"));

if (user % 4 === 0 || (user % 100 === 0 && user % 400 === 0))
{
    console.log("C'est une année bissextile");
}
else
{
    console.log("Ce n'est pas une année bissextile")
}