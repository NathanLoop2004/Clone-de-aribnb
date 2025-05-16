/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */
import stays from './stays.js';
import { cardsContedor } from './cards.js';
import traerCards from './cards.js';



//Utilidad de Aparecer ventana Principal de Filtros
let botonAbrirFiltro = document.querySelector("#openShearch")
let filtroEspecifico = document.querySelector("#filter")
let botonCerrarFiltro = document.querySelector("#closeShearch")


//Utilidad para AgregaryRestarAmbosInput
let inputValor1 = document.querySelector("#inputAdult")
let inputValor2 = document.querySelector("#inputChildren")
//Utilidad para AgregaryRestarAmbosInput // Buttons Adults
let buttonInput1Menos = document.querySelector("#inputButtonMenos1");
let buttonInput1Mas = document.querySelector("#inputButtonMas1");
////Utilidad para AgregaryRestarAmbosInput // Buttons Childrens
let buttonInput2Menos = document.querySelector("#inputButtonMenos2");
let buttonInput2Mas = document.querySelector("#inputButtonMas2");
//Utilidad para mostrar en el Input
let divInputSuma = document.querySelector("#divInputSuma")


//Utilidad del filtrado

export function CerrarFiltro(){
    
    filtroEspecifico.classList.add("hidden")
}



export default function AbrirCerrarFiltro(){

botonAbrirFiltro.addEventListener("click", function (){
filtroEspecifico.classList.remove("hidden")

botonCerrarFiltro.addEventListener("click", function(){
    filtroEspecifico.classList.add("hidden")

filtroEspecifico.addEventListener("click", function(evento){
if(evento.target.classList.contains("filter-entero"))
    filtroEspecifico.classList.add("hidden")
})

})
})

}


//////////////////////////////////////////////////////
//Agregar valor a input y restar
export function AgregaryRestarAmbosInput(){
//button Adult 
// Menos
    buttonInput1Menos.addEventListener("click", function(){
        if (inputValor1.value == 0) {
            inputValor1.value = 0;
        } else {
            inputValor1.value = Number(inputValor1.value) - 1;
        }
        agregarDivInput(); // <-- Actualiza el div
    })
//Mas
    buttonInput1Mas.addEventListener("click", function(){
    inputValor1.value = Number(inputValor1.value) + 1;
    agregarDivInput(); // <-- Actualiza el div
    })
//button Children
 buttonInput2Menos.addEventListener("click", function(){
        if (inputValor2.value == 0) {
            inputValor2.value = 0;
        } else {
            inputValor2.value = Number(inputValor2.value) - 1;
        }
        agregarDivInput(); // <-- Actualiza el div
    })
//Mas
    buttonInput2Mas.addEventListener("click", function(){
    inputValor2.value = Number(inputValor2.value) + 1;
    agregarDivInput(); // <-- Actualiza el div
    })

}

// Actualiza el input total cuando cambian adultos/niños
export function agregarDivInput() {
    const val1 = parseInt(inputValor1.value, 10) || 0;
    const val2 = parseInt(inputValor2.value, 10) || 0;
    divInputSuma.value = val1 + val2;
}

// Escucha cambios manuales en el input total (opcional)
divInputSuma.addEventListener('input', function() {
    let total = parseInt(divInputSuma.value, 10) || 0;
    // Aquí puedes decidir cómo repartir el total entre adultos y niños,
    // o simplemente dejarlo como display-only (solo lectura).
    // Si quieres que sea solo display, agrega el atributo readonly al input.
});

// Cuando cambian los inputs individuales, actualiza el total
export function escuchadorDeInputs() {
    inputValor1.addEventListener('input', agregarDivInput);
    inputValor2.addEventListener('input', agregarDivInput);
    agregarDivInput(); // Inicializa el valor al cargar
}

//Filtrado
export function getTotalGuests() {
    const val1 = parseInt(inputValor1.value, 10) || 0;
    const val2 = parseInt(inputValor2.value, 10) || 0;
    console.log( val1 + val2);
}
//Este es el valor del input guess
let totalGuests = getTotalGuests();



//Logica de formulario

let formulario = document.querySelector("#formulario")

function renderCard(cards) {
    if (cards.superHost && cards.beds >= 1) {
        cardsContedor.innerHTML += `
        <div class="w-[375px] mt-8">
            <section class="h-[230px] w-[340px] xl:w-[300px] mx-auto">
                <img class="rounded-[20px] w-[350px] h-[220px]" src="${cards.photo}">
            </section>
            <section class="border-black h-[30px] w-[375px] flex flex-row">
                <section class="border-black w-[400px] items-center flex flex-row">
                    <div class="border border-black ml-6 rounded-[10px] text-[13px] py-0.5 px-3">SUPERHOST</div>
                    <h1 class="ml-2 text-gray-600 text-[14px] font-semibold border-black">${cards.type} ${cards.beds} beds</h1>
                </section>
                <section class="border-black w-[95px] flex flex-row mt-1">
                    <img class="ml-2 h-5 xl:ml-[-20px]" src="./src/images/icons/icons8-estrella-48 (1).png">
                    <h1 class="text-gray-600 text-[14px] font-bold">${cards.rating}</h1>
                </section>
            </section>
            <section class="w-[375px] xl:w-[300px] h-[20px] mt-2">
                <h1 class="text-[14px] font-bold ml-8">${cards.title}</h1>
            </section>
        </div>
        `;
    } else if (cards.beds == null && !cards.superHost) {
        cardsContedor.innerHTML += `
        <div class="w-[375px] border-black mt-8">
            <section class="h-[230px] w-[340px] xl:w-[300px] mx-auto">
                <img class="rounded-[20px] w-[350px] h-[220px]" src="${cards.photo}">
            </section>
            <section class="border-black h-[30px] w-[375px] flex flex-row mt-1 xl:ml-2">
                <section class="border-black w-[220px] items-center">
                    <h1 class="ml-8 text-gray-600 text-[14px] font-semibold">${cards.type}</h1>
                </section>
                <section class="border-black w-[155px] flex flex-row">
                    <img class="ml-22 h-5 xl:ml-[60px]" src="./src/images/icons/icons8-estrella-48 (1).png">
                    <h1 class="text-gray-600 text-[14px] font-bold">${cards.rating}</h1>
                </section>
            </section>
            <section class="w-[375px] h-[20px]">
                <h1 class="text-[14px] font-bold ml-8 xl:ml-10">${cards.title}</h1>
            </section>
        </div>
        `;
    } else if (cards.beds == null && cards.superHost) {
        cardsContedor.innerHTML += `
        <div class="w-[375px] mt-8">
            <section class="h-[230px] w-[340px] xl:w-[300px] mx-auto">
                <img class="rounded-[20px] w-[350px] h-[220px]" src="${cards.photo}">
            </section>
            <section class="border-black h-[30px] w-[375px] flex flex-row">
                <section class="border-black w-[400px] items-center flex flex-row xl:ml-4">
                    <div class="border border-black ml-6 rounded-[10px] text-[13px] py-0.5 px-3">SUPERHOST</div>
                    <h1 class="ml-2 text-gray-600 text-[14px] font-semibold border-black">${cards.type}</h1>
                </section>
                <section class="border-black w-[95px] flex flex-row mt-1">
                    <img class="ml-2 h-5 xl:ml-[-15px]" src="./src/images/icons/icons8-estrella-48 (1).png">
                    <h1 class="text-gray-600 text-[14px] font-bold">${cards.rating}</h1>
                </section>
            </section>
            <section class="w-[375px] h-[20px] mt-2 xl:ml-4">
                <h1 class="text-[14px] font-bold ml-8">${cards.title}</h1>
            </section>
        </div>
        `;
    } else {
        cardsContedor.innerHTML += `
        <div class="w-[375px] border-black mt-8">
            <section class="h-[230px] w-[340px] xl:w-[300px] mx-auto">
                <img class="rounded-[20px] w-[350px] h-[220px]" src="${cards.photo}">
            </section>
            <section class="border-black h-[30px] w-[375px] flex flex-row mt-1">
                <section class="border-black w-[220px] items-center">
                    <h1 class="ml-8 text-gray-600 text-[14px] font-semibold">${cards.type} ${cards.beds} beds</h1>
                </section>
                <section class="border-black w-[155px] flex flex-row">
                    <img class="ml-22 h-5 xl:ml-[60px] border-black" src="./src/images/icons/icons8-estrella-48 (1).png">
                    <h1 class="text-gray-600 text-[14px] font-bold">${cards.rating}</h1>
                </section>
            </section>
            <section class="w-[375px] h-[20px]">
                <h1 class="text-[14px] font-bold ml-8">${cards.title}</h1>
            </section>
        </div>
        `;
    }
}

export function Filtrado() {
    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        cardsContedor.innerHTML = "";
        let formdata1 = new FormData(formulario);
        let input1 = formdata1.get("location");
        let input2 = formdata1.get("guest");

        let filtradas = stays.filter(cards => {
            if (input1 && input2) {
                return cards.city.toLowerCase().includes(input1.toLowerCase()) && cards.beds >= Number(input2);
            } else if (!input1 && input2) {
                return cards.beds >= Number(input2);
            } else if (input1 && !input2) {
                return cards.city.toLowerCase().includes(input1.toLowerCase());
            } else {
                return true; // mostrar todas
            }
        });

        filtradas.forEach(renderCard);

        CerrarFiltro();
    });
}














