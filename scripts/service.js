const menu = document.querySelector(".tabs");

menu.addEventListener("click", (event)=>{
    let target = event.target.dataset.item;

   document.querySelector(".active__tab").classList.remove("active__tab");

   document.querySelector(".active__text").classList.remove("active__text");

   document.querySelector(`[data-text = ${target}]`).classList.add("active__text");

   event.target.classList.add("active__tab")

})



