/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */
//Import de logica de cards
import traerCards from './cards.js';

//Import de logica de Filter
import AbrirCerrarFiltro, { AgregaryRestarAmbosInput }  from './utils.js';
//logica de numeros Input
import { agregarDivInput } from './utils.js';
import { escuchadorDeInputs } from './utils.js';

//Filtrado
import { Filtrado } from './utils.js';


traerCards()
AbrirCerrarFiltro()
AgregaryRestarAmbosInput()
agregarDivInput()
escuchadorDeInputs()
Filtrado()
