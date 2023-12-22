import { pedirCarta, valorCarta, crearCartaHTML } from './';
/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {Array<HTMLElement>} puntosHTML array elementos HTML para mostrar los puntos
 * @param {Array<HTMLElement>} divCartasComputadora array elementos HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if (!puntosMinimos) {
        throw Error('puntosMinimos son obligatorios');
    }

    if ( !puntosHTML || puntosHTML.length === 0 ) {
        throw Error('puntosHTML es obligatorio como un arreglo de HTMLElement');
    }
    
    
    if ( !deck || deck.length === 0 ) {
        throw Error('deck es obligatorio como un arreglo de string');
    }
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        divCartasComputadora.append( crearCartaHTML(carta) );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}