
const item = document.querySelectorAll('.item')
const vehicles = document.querySelector('.vehicles')
const energy = document.querySelector('.energy')
const chargin = document.querySelector('.chargin')
const discover = document.querySelector('.discover')
const shop = document.querySelector('.shop')


item[0].addEventListener("mouseenter", ()=>{
    vehicles.style.height = "450px"
})
vehicles.addEventListener("mouseleave", ()=>{
    vehicles.style.height = "0px"

})

item[1].addEventListener("mouseenter", ()=>{
    energy.style.height = "450px"
})
energy.addEventListener("mouseleave", ()=>{
    energy.style.height = "0px"

})

item[2].addEventListener("mouseenter", ()=>{
    chargin.style.height = "450px"
})
chargin.addEventListener("mouseleave", ()=>{
    chargin.style.height = "0px"

})

item[3].addEventListener("mouseenter", ()=>{
    discover.style.height = "450px"
})
discover.addEventListener("mouseleave", ()=>{
    discover.style.height = "0px"

})
item[4].addEventListener("mouseenter", ()=>{
    shop.style.height = "450px"
})
shop.addEventListener("mouseleave", ()=>{
    shop.style.height = "0px"

})