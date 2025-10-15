import {menuArray} from "./data.js"
const weaponGallery = document.getElementById("weapon-gallery")
const cart = document.getElementById("cart-items")

function generateWeaponHtml(wepArr){
   const weaponMenu = wepArr.map(menu =>{
       const {name,catagory,id,price,emoji} = menu
       return `
       <section class="weapon">

    <p class="weapon-img" id="${id}"> ${emoji} </p>

    <div class="weapon-info">
        <h2> ${name}  </h2>
        <p> ${catagory} </p>
        <p class="cost"> ${price}$  </p>   
    </div>

    <button class="purchase-weapon" data-add="${id}"> + </button>

</section>
       ` 
    }).join(" ")

    return weaponMenu
}

function renderWeaponList(arr){
   weaponGallery.innerHTML = generateWeaponHtml(arr)
}

renderWeaponList(menuArray)