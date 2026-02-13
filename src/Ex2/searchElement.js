// searchElement.js
export function searchElement(array, el, callback) {
    const index = array.indexOf(el);
    if (index !== -1) {
        callback(`L'élément ${el} se trouve à la position ${index}.`);
    } else {
        callback(`Erreur : l'élément ${el} n'est pas dans le tableau.`);
    }
}
