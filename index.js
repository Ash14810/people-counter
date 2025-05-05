let countEl = document.getElementById("count")
let cou = 0
let saveEl = document.getElementById("save-el")

function increment(){
    cou += 1
    countEl.innerText = cou
}

function save(){
   saveEl.textContent +=" "+ cou+" -" 
   countEl.innerText = 0
   cou = 0
}