/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */




//Utilidad de Aparecer ventana Principal de Filtros
let botonAbrirFiltro = document.querySelector("#openShearch")
let filtroEspecifico = document.querySelector("#filter")
let botonCerrarFiltro = document.querySelector("#closeShearch")

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