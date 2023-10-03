let lst = [];
const even = (element) => element.length > 8;

lst.push(prompt("Entrez un mot à ajouter à la liste"));
lst.push(prompt("Entrez un mot à ajouter à la liste"));
lst.push(prompt("Entrez un mot à ajouter à la liste"));
lst.push(prompt("Entrez un mot à ajouter à la liste"));
lst.push(prompt("Entrez un mot à ajouter à la liste"));

if (lst.some(even))
{
    alert("Un element est plus long que 8");
}
else
{
    alert("aucun element est plus long que 8");
}