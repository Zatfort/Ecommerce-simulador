// barra navegacion
let navigation = document.querySelector('.navigation')

let toggle = document.querySelector('.toggle')
toggle.onclick = function(){
    navigation.classList.toggle('active')
}


// titulo animado
let text = document.querySelector('.hoo')
let str = text.innerHTML;

text.innerHTML = "";

let speed = 300

let i = 0

function typeWriter(){
    if(i < str.length){
        text.innerHTML += str.charAt(i)
        i++
        setTimeout(typeWriter,speed)
    }
}

setTimeout(typeWriter,speed);

// titulo animado end
