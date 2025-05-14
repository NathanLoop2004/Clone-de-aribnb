import stays from './stays.js';

console.log(stays);



let cardsContedor = document.querySelector("#sectionCard")

function traerSkeleton(){
    cardsContedor.innerHTML = "";
    cardsContedor.forEach()
}


export default function  traerCards(){
    cardsContedor.innerHTML = "";
    stays.forEach((cards) => {
  //Si hay camas y es un superhost
     if (cards.superHost == true && cards.beds >= 1) {
        cardsContedor.innerHTML += `
        <div class="w-[375px]  mt-8">
        <!-- Section Img-->
           <section class="h-[230px] w-[340px] mx-auto"><img class="rounded-[20px] w-[350px] h-[220px]" src="${cards.photo}"></section>

        <!-- Section Points and Beds -->   
           <section class=" border-black h-[30px] w-[375px] flex flex-row ">
            <section class=" border-black w-[400px] items-center flex flex-row "><div class="border border-black ml-6 rounded-[10px] text-[13px] py-0.5 px-3 ">SUPERHOST</div><h1 class="ml-2 text-gray-600 text-[14px]  font-semibold  border-black">${cards.type} ${cards.beds} beds</h1></section>
            <section class=" border-black  w-[95px] flex flex-row mt-1 "><img class="ml-2 h-5 " src="./src/images/icons/icons8-estrella-48 (1).png"><h1 class="text-gray-600 text-[14px] font-bold">${cards.rating}</h1></section>
           </section>


        <!-- Section Tittle-->  
           <section class="w-[375px] h-[20px] mt-2"><h1 class="text-[14px] font-bold ml-8">${cards.title}</h1></section>
      </div>
        `
     }
 //si no hay camas sale esto pero sin superhost    
     else if(cards.beds == null && cards.superHost == false){
  cardsContedor.innerHTML += `
    <div class="w-[375px]  border-black mt-8">
    <!-- Section Img-->
    <section class="h-[230px] w-[340px] mx-auto"><img class="rounded-[20px] w-[350px] h-[220px]" src="${cards.photo}"></section>
    
    <!-- Section Points and Beds -->   
    <section class=" border-black h-[30px] w-[375px] flex flex-row mt-1">
    <section class=" border-black w-[220px] items-center "><h1 class="ml-8 text-gray-600 text-[14px] font-semibold">${cards.type} </h1></section>
    <section class=" border-black w-[155px] flex flex-row  "><img class="ml-22 h-5" src="./src/images/icons/icons8-estrella-48 (1).png"><h1 class="text-gray-600 text-[14px] font-bold">${cards.rating}</h1></section>
    </section>
    
    
    <!-- Section Tittle-->  
    <section class="w-[375px] h-[20px]"><h1 class="text-[14px] font-bold ml-8">${cards.title}</h1></section>
    </div>
    `
     }
// Si no hay camas y es super host
 else if(cards.beds == null && cards.superHost == true){
   cardsContedor.innerHTML += `
        <div class="w-[375px]  mt-8">
        <!-- Section Img-->
           <section class="h-[230px] w-[340px] mx-auto"><img class="rounded-[20px] w-[350px] h-[220px]" src="${cards.photo}"></section>

        <!-- Section Points and Beds -->   
           <section class=" border-black h-[30px] w-[375px] flex flex-row ">
            <section class=" border-black w-[400px] items-center flex flex-row "><div class="border border-black ml-6 rounded-[10px] text-[13px] py-0.5 px-3 ">SUPERHOST</div><h1 class="ml-2 text-gray-600 text-[14px]  font-semibold  border-black">${cards.type} </h1></section>
            <section class=" border-black  w-[95px] flex flex-row mt-1 "><img class="ml-2 h-5 " src="./src/images/icons/icons8-estrella-48 (1).png"><h1 class="text-gray-600 text-[14px] font-bold">${cards.rating}</h1></section>
           </section>


        <!-- Section Tittle-->  
           <section class="w-[375px] h-[20px] mt-2"><h1 class="text-[14px] font-bold ml-8">${cards.title}</h1></section>
      </div>
        `
 } 
 //Si es una card Normal   
else{

    
    cardsContedor.innerHTML += `
    <div class="w-[375px]  border-black mt-8">
    <!-- Section Img-->
    <section class="h-[230px] w-[340px] mx-auto"><img class="rounded-[20px] w-[350px] h-[220px]" src="${cards.photo}"></section>
    
    <!-- Section Points and Beds -->   
    <section class=" border-black h-[30px] w-[375px] flex flex-row mt-1">
    <section class=" border-black w-[220px] items-center "><h1 class="ml-8 text-gray-600 text-[14px] font-semibold">${cards.type} ${cards.beds} beds</h1></section>
    <section class=" border-black w-[155px] flex flex-row  "><img class="ml-22 h-5" src="./src/images/icons/icons8-estrella-48 (1).png"><h1 class="text-gray-600 text-[14px] font-bold">${cards.rating}</h1></section>
    </section>
    
    
    <!-- Section Tittle-->  
    <section class="w-[375px] h-[20px]"><h1 class="text-[14px] font-bold ml-8">${cards.title}</h1></section>
    </div>
    `
    }

    })
}

