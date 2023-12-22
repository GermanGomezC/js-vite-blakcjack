/**
 *  Función para crear la carta html
 * @param {String} carta nombre carta
 * @returns {HTMLImageElement} imagen html de la carta
 */
export const crearCartaHTML = (carta) => {
    if(!carta) { throw Error('La carta es un valor obligatorio'); }
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}