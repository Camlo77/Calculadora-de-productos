let precioSpan = document.querySelector(".precio-inicial");
let precioTotal = document.querySelector(".valor-total")
let precio = 400000
precioSpan.innerHTML = precio

let cantidad = document.querySelector(".cantidad")
let agregar = document.querySelector("#btn-agregar")
let restar = document.querySelector("#btn-restar")
let contador = 0

agregar.addEventListener('click', function(){
    contador++
    cantidad.innerHTML = contador
    precioTotal.innerHTML = contador*precio
});

restar.addEventListener('click', function(){
    contador--
    cantidad.innerHTML = contador
    precioTotal.innerHTML = contador*precio
});
