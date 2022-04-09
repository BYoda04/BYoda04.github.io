let toggle = document.getElementById('toggle')
let menu = document.getElementById('menu')
let typeOne = document.getElementById('one')
let typeTwo = document.getElementById('two')

toggle.onclick = function() {
    menu.classList.toggle('active')
}

setTimeout(() => {
    
    typeOne.classList.remove('init')
    typeTwo.innerText = 'WEB DEVELOPER'
    typeTwo.classList.add('init')
    
    setTimeout(() => {
        typeTwo.classList.remove('init')
    }, 2000);

}, 2000);