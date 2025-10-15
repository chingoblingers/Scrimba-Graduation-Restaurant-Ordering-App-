import {menuArray} from "./data.js"
const weaponGallery = document.getElementById("weapon-gallery")
const cart = document.getElementById("cart-items")
let weaponBasket = []

function generateWeaponHtml(wepArr){
   const weaponMenu = wepArr.map(menu =>{
       const {name,catagory,id,price,emoji} = menu
       return `
       <section class="weapon">

    <p class="weapon-img"> ${emoji} </p>

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


function addToBasket(id, arr){
  arr.forEach(wep => {
    if(wep.id === id){
        weaponBasket.push(wep)
    }
  }); 
renderBasket()
}

function generateBaskethtml(){
  const finalBasket = weaponBasket.map(wep =>{
        return ` 
<div class="cart-details">
<h2> ${wep.name} </h2>
<button> remove </button>
<p> ${wep.price}</p>
</div>
        `
    }).join(" ")
   return finalBasket

}

function renderBasket(){
    cart.innerHTML = generateBaskethtml()
}

weaponGallery.addEventListener("click", e =>{
    const selected = Number(e.target.dataset.add)
    if(!isNaN(selected)){
        addToBasket(selected, menuArray)
    }
})

