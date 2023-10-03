function quickSort(lst)
{
    if (lst.length < 2)
    {
        return (lst);
    }
    let pivot = lst.pop();
    let petit = [];
    let grand = [];
    for (let i = 0; i < lst.length; i++)
    {
        if (lst[i] < pivot)
        {
            petit.push(lst[i]);
        }
        else
        {
            grand.push(lst[i]);
        }
    }
    return (quickSort(petit).concat(pivot, quickSort(grand)));
}

let nameTab = ["guillaume", "annas", "michal", "artur", "celine", "hannah", "bob", "scarlet", "artin"];
console.log(quickSort(nameTab));