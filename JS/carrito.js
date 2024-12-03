// Elementos del DOM
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
const contenedorTotal = document.querySelector("#total");

const botonVaciarCarrito = document.querySelector("#carrito-acciones-vaciar");
const botonFinalizarCompra = document.querySelector("#carrito-acciones-comprar");

// Obtener carrito de Local Storage o inicializar vacío
let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

// Función para cargar el carrito
function cargarCarrito() {
  contenedorCarritoProductos.innerHTML = "";

  if (productosEnCarrito.length > 0) {
    // Mostrar productos
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    productosEnCarrito.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("carrito-producto");
      div.innerHTML = `
        <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="carrito-producto-titulo">
          <small>Título</small>
          <h3>${producto.titulo}</h3>
        </div>
        <div class="carrito-producto-cantidad">
          <small>Cantidad</small>
          <p>${producto.cantidad}</p>
        </div>
        <div class="carrito-producto-precio">
          <small>Precio</small>
          <p>$${producto.precio}</p>
        </div>
        <div class="carrito-producto-subtotal">
          <small>Subtotal</small>
          <p>$${producto.cantidad * producto.precio}</p>
        </div>
        <button class="carrito-producto-eliminar" data-id="${producto.id}">
          <i class="bi bi-trash"></i>
        </button>
      `;
      contenedorCarritoProductos.append(div);
    });

    actualizarBotonesEliminar();
    actualizarTotal();
  } else {
    // Mostrar carrito vacío
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
  }
}

// Función para actualizar botones de eliminación
function actualizarBotonesEliminar() {
  const botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelCarrito);
  });
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(e) {
  const idProducto = e.currentTarget.dataset.id;
  productosEnCarrito = productosEnCarrito.filter((producto) => producto.id !== idProducto);

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
  cargarCarrito();
}

// Función para actualizar el total
function actualizarTotal() {
  const total = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0);
  contenedorTotal.innerText = `$${total}`;
}

// Función para vaciar el carrito
botonVaciarCarrito.addEventListener("click", () => {
  productosEnCarrito = [];
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
  cargarCarrito();
});

// Función para finalizar compra
botonFinalizarCompra.addEventListener("click", () => {
  productosEnCarrito = [];
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

  contenedorCarritoVacio.classList.add("disabled");
  contenedorCarritoAcciones.classList.add("disabled");
  contenedorCarritoProductos.classList.add("disabled");
  contenedorCarritoComprado.classList.remove("disabled");
});

// Cargar el carrito al iniciar
cargarCarrito();
