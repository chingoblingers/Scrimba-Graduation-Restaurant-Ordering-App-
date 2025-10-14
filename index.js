import {menuArray} from "./data.js"
const weaponContainer = document.getElementById("weapon-container")

function renderWeapon(wepArr){
    const weaponMenu = wepArr.map(menu =>{
       const {name,catagory,id,price,emoji} = menu
       return `
       <section id="weapon">

    <p class="weapon-img" id="${id} "> ${emoji} </p>

    <div class="weapon-info">
        <h2> ${name}  </h2>
        <p> ${catagory} </p>
        <p class="cost"> ${price}$  </p>   
    </div>

    <button class="purchase-weapon" data-add="${id}"> + </button>

</section>
       ` 
    }).join(" ")

    weaponContainer.innerHTML+= weaponMenu
}

renderWeapon(menuArray)