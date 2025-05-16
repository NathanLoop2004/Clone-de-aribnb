/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */




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
//Utilidad para mostrar en el div
let divInputSuma = document.querySelector("#divInputSuma")




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
            console.log("No puedes es menor")
            inputValor1.value = 0;
        }
        else{
inputValor1.value = Number(inputValor1.value) - 1}
    })
//Mas
    buttonInput1Mas.addEventListener("click", function(){
    inputValor1.value = Number(inputValor1.value) +1
    })
//button Children
 buttonInput2Menos.addEventListener("click", function(){
        if (inputValor2.value == 0) {
            console.log("No puedes es menor")
            inputValor2.value = 0;
        }
        else{
inputValor2.value = Number(inputValor2.value) - 1}
    })
//Mas
    buttonInput2Mas.addEventListener("click", function(){
    inputValor2.value = Number(inputValor2.value) +1
    })

}

export function agregarDivInput(){
    const val1 = parseInt(inputValor1.value, 10) || 0;
    const val2 = parseInt(inputValor2.value, 10) || 0;
    divInputSuma.textContent = `Guest ${val1 + val2}`;
}

export function escuchadorDeInputs(){
    inputValor1.addEventListener('input', agregarDivInput);
    inputValor2.addEventListener('input', agregarDivInput);
    agregarDivInput(); // Inicializa el valor al cargar
}