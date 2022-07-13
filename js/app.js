// barra navegacion
let navigation = document.querySelector('.navigation')

let toggle = document.querySelector('.toggle')
toggle.onclick = function () {
    navigation.classList.toggle('active')
}


// titulo animado
// let text = document.querySelector('.hoo')
// let str = text.innerHTML;

// text.innerHTML = "";

// let speed = 300

// let i = 0

// function typeWriter() {
//     if (i < str.length) {
//         text.innerHTML += str.charAt(i)
//         i++
//         setTimeout(typeWriter, speed)
//     }
// }

// setTimeout(typeWriter, speed);




// Logica Del Proyecto


// Declaraciones
//--------------
const allLibros = [volumen1, volumen2, volumen3, volumen4, volumen5, volumen6, volumen7, volumen8, volumen9, volumen10, volumen11, volumen12, volumen13, volumen14, volumen15, volumen16]

// Query de elementos
//-------------------
let carrito = []

const cartasDeProductos = document.querySelector('.sectionProductos')

const cartasDeCarrito = document.querySelector('.cartasDeCarrito')


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
                                <button  data-id="${libros.id}" class="botonjs"> Añadir al Carrito </button>
                                <button>Mas info</button>
                                </div>
                                </div>
                    </div>
                    `
        cartasDeProductos.append(librosArticle)

    })

}

renderizarProductos()


const renderizarProductosEnCarrito = () => {
    cartasDeCarrito.innerHTML = ''
    carrito.forEach((libros) => {
        const aaa = document.createElement('tr')
        aaa.className = 'cartasedesdejs'
        aaa.innerHTML = `
                            <td>
                                <div class="imagen">
                                    <img src="${libros.img}" alt="">
                                </div>
                            </td>
                            <td>${libros.name}</td>
                            <td>${libros.format}</td>
                            <td>${libros.date}</td>
                            <td>$${libros.price}</td>
                            <td>${libros.autor}</td>
                            <td>${libros.id}</td>
        `
        cartasDeCarrito.append(aaa)
    })
}


// boton agrgar carrito

const agregarLibroaCarrito = (e) => {
    const librosIdSelected = e.target.getAttribute('data-id')
    const libroSelected = allLibros.find((libros) => libros.id == librosIdSelected)
    carrito.push(libroSelected)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    renderizarProductosEnCarrito()
}

const botonjs = document.querySelectorAll('.botonjs')

botonjs.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarLibroaCarrito)
})

// boton agrgar carrito end









// EventListeners
//---------------






// Ejecuciones 
//------------