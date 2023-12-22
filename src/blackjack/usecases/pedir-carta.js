// Esta función me permite tomar una carta 
/**
 * 
 * @param {Array<String>} deck Ejemplo: ["AD","3S","JH", ...]
 * @returns {String} La última carta del deck
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw Error('deck es obligatorio como un arreglo de string');
        // throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}