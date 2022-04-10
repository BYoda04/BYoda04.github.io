
let container = document.getElementById('container')
let toggle = document.getElementById('toggle')
let menu = document.getElementById('menu')
let typeOne = document.getElementById('one')
let typeTwo = document.getElementById('two')
let typeTrhee = document.getElementById('trhee')
let typeFour = document.getElementById('four')

toggle.onclick = function() {
    menu.classList.toggle('active')
    container.classList.toggle('active')
}

setTimeout(() => {

    typeOne.innerText = `HI I'm Javier Matos`
    typeOne.classList.add('init')

    setTimeout(() => {
    
        typeOne.classList.remove('init')
    
        //span two
        typeTwo.innerText = 'UX/UI DESIGNER'
        typeTwo.classList.add('init')
        
        setTimeout(() => {
            typeTwo.classList.remove('init')
    
            //span three
            typeTrhee.innerText = 'FRONTEND DEVELOPER'
            typeTrhee.classList.add('init')
            
            setTimeout(() => {
                typeTrhee.classList.remove('init')
    
                //span four
                typeFour.innerText = 'BACKEND DEVELOPER'
                typeFour.classList.add('init')
                
                setTimeout(() => {
                    typeFour.classList.remove('init')
                }, 2000);
            }, 2000);
        }, 2000);
    
    }, 2000);
    
}, 500);

