let homeCount = 0
let guestCount = 0

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function home1(){
    homeCount += 1
    homeEl.textContent = homeCount
}
function home2(){
    homeCount += 2
    homeEl.textContent = homeCount
}
function home3(){
    homeCount += 3
    homeEl.textContent = homeCount
}
function guest1(){
    guestCount += 1
    guestEl.textContent = guestCount    
}
function guest2(){
    guestCount += 2
    guestEl.textContent = guestCount   
}
function guest3(){
    guestCount += 3
    guestEl.textContent = guestCount      
}
function newGame(){
    homeCount = 0
    guestCount = 0
    homeEl.textContent = 0
    guestEl.textContent = 0 
}