  // barra navegacion del sitio
let navigation = document.querySelector('.navigation')

let toggle = document.querySelector('.toggle')
toggle.onclick = function () {
    navigation.classList.toggle('active')
}
// -----------------------------------

// logica del carrito
// ____________________________________


// funcion mostras productos en carrito

const cartasDeCarrito = document.querySelector('.cartasDeCarrito')


const renderizarProductosEnCarrito = () => {
    const almacenados = JSON.parse(localStorage.getItem('carritoLista'))
    cartasDeCarrito.innerHTML = ''
    almacenados.forEach((libros) => {
        
        const cadalibro = document.createElement('article')
        cadalibro.className = 'flex-row CartasdeProductos'
        cadalibro.innerHTML = 
        `
                        <span >
                            <img class="imagen" src="${libros.img}" alt="">
                        </span>
                        <span>${libros.name}</span>  
                        <span>${libros.format}</span>  
                        <span>${libros.date}</span>  
                        <span>${libros.price}</span>  
                        <span>${libros.autor}</span>  
                        <span>${libros.id}</span>
        
        `
        cartasDeCarrito.append(cadalibro)
    })
}

// -----------------------------------


// IF para saber si hay algo en el carrito al inicar ( no funciona)

if (localStorage.getItem('carritoLista')) {
    carrito = JSON.parse(localStorage.getItem('carritoLista'))
    renderizarProductosEnCarrito()
}

// -----------------------------------


// Boton Vaciar Carrito
const vaciarcarrito = () => {
    localStorage.getItem('carritoLista') && localStorage.removeItem('carritoLista') 
    carrito = []
    renderizarProductosEnCarrito()
}

const vaciar = document.querySelector('.vaciar')
vaciar.addEventListener('click', vaciarcarrito)



// -----------------------------------

// Boton Confirmar Compra 'extraido de libreria'
document.querySelector('.confirmar').addEventListener('click',() => {
    Swal.fire({
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },


        icon:'success',
        text:'compra confirmada',
        background: ' url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/884d4739-e1b4-4a0d-9915-e886ef4bf263/dcanqxa-8552c4ae-a175-403a-935e-8da88d81e300.png/v1/fill/w_800,h_494,q_80,strp/rebirth_by_thefearmaster_dcanqxa-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDk0IiwicGF0aCI6IlwvZlwvODg0ZDQ3MzktZTFiNC00YTBkLTk5MTUtZTg4NmVmNGJmMjYzXC9kY2FucXhhLTg1NTJjNGFlLWExNzUtNDAzYS05MzVlLThkYTg4ZDgxZTMwMC5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9IZKGdSv_iioqQdCHeJ-L6pSBPkBIV51sC6kz-54W0c) left ',
        title: 'Gracias por su Compra',
        color: '#fff',
        backdrop: `
        rgba(76, 66, 21, 0.696)
                url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2705e272-3110-4d25-9d23-f8402ad8e83a/dc9bsvs-041c492a-099d-4f95-a3b5-0c641bb515fe.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MDVlMjcyLTMxMTAtNGQyNS05ZDIzLWY4NDAyYWQ4ZTgzYVwvZGM5YnN2cy0wNDFjNDkyYS0wOTlkLTRmOTUtYTNiNS0wYzY0MWJiNTE1ZmUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.B-_9wlPvq3aNGDOkFJDe9BIRd5-Oo6S7GIxu0KmPVTM")
                left bottom
                no-repeat
  `
      })
})
// -----------------------------------



// contador de productos en el carrito

let contador = 0


const valor = document.querySelector('.contador')


const contadorFuncion = () => {
    almacenados = JSON.parse(localStorage.getItem('carritoLista'))
    almacenados.forEach(() => {
        contador++

        valor.textContent = contador

    })

}

contadorFuncion()

// -----------------------------------


