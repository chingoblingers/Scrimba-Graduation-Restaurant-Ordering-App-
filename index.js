import {menuArray} from "./data.js"
const weaponGallery = document.getElementById("weapon-gallery")
const cart = document.getElementById("cart-items")
let weaponBasket = []
const cartSection = document.getElementById("cart")

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

function addToBasket(id, arr) {
  const weapon = arr.find(wep => wep.id === id)
  if (weapon) {
    weaponBasket.push(weapon)
    renderBasket()
  }
}


function generateBaskethtml(){
  const finalBasket = weaponBasket.map(wep =>{
        return ` 
<div class="cart-details">
<h2> ${wep.name} </h2>
<button data-remove="${wep.id}"> remove </button>
<p> ${wep.price}</p>
</div>
        `
    }).join(" ")
   return finalBasket

}

function renderBasket() {
  if (weaponBasket.length === 0) {
    cartSection.style.display = "none"
  } else {
    const basketHtml = generateBaskethtml()
    const totalHtml = `
      <div class="cart-price">
        <h2>Total Price:</h2>
        <p>${calculateTotal()}$</p>
      </div>
    `
    cart.innerHTML = basketHtml + totalHtml
    cartSection.style.display = ""
  }
}


weaponGallery.addEventListener("click", e =>{
    const selected = Number(e.target.dataset.add)
    if(!isNaN(selected)){
        addToBasket(selected, menuArray)
    }
})

cart.addEventListener("click", e =>{
    const selcted = Number(e.target.dataset.remove)
    if(!isNaN(selcted)){
        removeWeapon(selcted)
    }
} )


function removeWeapon(id) {
  const index = weaponBasket.findIndex(weapon => weapon.id === id)
  if (index !== -1) {
    weaponBasket.splice(index, 1)
  }
  renderBasket()
}

function calculateTotal() {
  return weaponBasket.reduce((sum, weapon) => sum + weapon.price, 0)
}

