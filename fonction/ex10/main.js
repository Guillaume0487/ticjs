let rechercherElement = (tab, mot) => {
    for (const element of tab) {
        if (mot === element) 
            return true
    }
    return false
}

const lst = ["Guillaume", "Jean", "test"]
rechercherElement(lst, "")