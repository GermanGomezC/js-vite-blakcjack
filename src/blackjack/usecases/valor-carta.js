/**
 * Esta función recibe el código de la carta y 
 * retorna el valor númerico
 * @param {String} carta nombre de la carta
 * @returns {Number} Valor númerico de la carta
 */
export const valorCarta = ( carta ) => {
    if ( !carta ) {
        throw Error('carta debe de exisitir como string');
    }
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}