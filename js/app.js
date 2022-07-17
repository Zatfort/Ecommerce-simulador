// titulo animado
const text = document.querySelector('.hoo')
const str = text.innerHTML

text.innerHTML = ""

const speed = 50

let i = 0

function typeWriter() {
    if (i < str.length) {
        text.innerHTML += str.charAt(i)
        i++
        setTimeout(typeWriter, speed)
    }
}

setTimeout(typeWriter, speed)


// barra navegacion
let navigation = document.querySelector('.navigation')


let toggle = document.querySelector('.toggle')
toggle.onclick = function () {
    navigation.classList.toggle('active')
}


// Declaraciones
//--------------
let allLibros 


// Query de elementos
//-------------------


let carrito = JSON.parse(localStorage.getItem('carritoLista')) || []



const cartasDeProductos = document.querySelector('.sectionProductos')


// Funciones
//----------



const renderizarProductos = () => {
    allLibros.forEach((libros) => {
        const librosArticle = document.createElement('article')
        librosArticle.className = 'card'
        librosArticle.innerHTML = `
                    <div class="imgBx">
                        <img src="${libros.img}" alt="${libros.name}">
                    </div>
                    <div class="content">
                        <div class="details">
                            <h2>${libros.name}<br><span>${libros.autor}</span></h2>
                            <div class="data">
                                <h3>${libros.date}<br><span>Año</span></h3>
                                <h3>${libros.format}<br><span>Formato</span></h3>
                                <h3>${libros.price}<br><span>Precio</span></h3>
                            </div>
                            <div class="actionBtn">
                                <button  data-id="${libros.id}"   class="botonjs botontoaste" > Añadir al Carrito </button>
                                <button >Mas info</button>
                                </div>
                                </div>
                    </div>
                    `
        cartasDeProductos.append(librosArticle)
        
        

    })
    

}


fetch('../data/data.json')
    .then((res) => res.json())
    .then((jsonResponse) => {
        allLibros = jsonResponse.data

        renderizarProductos(allLibros)
    })
    

    







// renderizarProductos()

// boton agrgar carrito

const agregarLibroaCarrito = (e) => {
    const librosIdSelected = e.target.getAttribute('data-id')
    const libroSelected = allLibros.find((libros) => libros.id == librosIdSelected)
    carrito.push(libroSelected)
    localStorage.setItem('carritoLista', JSON.stringify(carrito))
    
    
}

const botonjs = document.querySelectorAll('.botonjs')

botonjs.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarLibroaCarrito)
    
})



// toastify

botonjs.forEach(btn => btn.addEventListener('click',() => {
    Toastify({
        text: "En Tu Carrito",
        duration: 3000,
        destination: "https://www.deviantart.com/anatofinnstark/art/You-do-not-control-me-Berserk-644589434",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        className: "toa",
        onClick: function () { } // Callback after click
    }).showToast();


}))



















// preguntar al tutor

/*
document.querySelector('.botonjs').addEventListener('click', () => {
    Toastify({
        text: "En Tu Carrito",
        duration: 3000,
        destination: "https://www.deviantart.com/anatofinnstark/art/You-do-not-control-me-Berserk-644589434",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        className: "toa",
        onClick: function(){} // Callback after click
      }).showToast();


})
esto no funciona 
*/




