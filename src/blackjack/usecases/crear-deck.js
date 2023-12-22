import _ from 'underscore';
/**
 * ESta función crea un nuevo deck
 * @param {Array<String>} tiposDeCartas  Ejemplo: ['C','D','H','S'];
 * @param {Array<String>} cartasEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} regresa un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, cartasEspeciales) => {
    let deck = [];
    if(!tiposDeCartas && tiposDeCartas.length == 0) {
        throw Error('tiposDeCartas es obligatorio como un arreglo de string');
    }
    if(!cartasEspeciales && cartasEspeciales.length == 0) {
        throw Error('cartasEspeciales es obligatorio como un arreglo de string');
    }
    // if() {
    //     throw Error('Tipos de carta tiene que ser un arreglo de strings');
    // }
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of cartasEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

// export default crearDeck;
