function ask()
{
    console.log("OK")
    let parent = prompt("Etes vous acompagner d'un parent ?\n(oui/non)").toLocaleLowerCase();
    if (parent === "oui")
    {
        console.log("vous pouvez rentrer");
    }
    else if (parent === "non")
    {
        console.log("vous ne pouvez pas rentrer");
    }
    else
    {
        return (ask());
    }
}

let age = parseInt(prompt("Entrez votre age pour voir si vous avez le droit d'aller en boite de nuit"));

if (50 < age)
{
    console.log("Vous pouvez entrer et avez droit a des boissons gratuite");
}
else if (18 < age)
{
    console.log("Vous pouvez rentrer");
}
else if (15 < age && age < 18)
{
    ask();
}
else
{
    console.log("Vous ne pouvez pas rentrer")
}