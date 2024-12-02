// Obtener productos del LocalStorage
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito) || [];

// Elementos del DOM
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
const botonVaciar = document.querySelector(".carrito-acciones-vaciar");
const contenedorTotal = document.querySelector(".total");
const botonComprar = document.querySelector(".carrito-acciones-comprar");

// Elementos del formulario de búsqueda avanzada
const formularioBusqueda = document.querySelector("#form-busqueda");
const campoRegion = document.querySelector("#region");
const campoPrecioMin = document.querySelector("#precio-min");
const campoPrecioMax = document.querySelector("#precio-max");
const campoTipoCafe = document.querySelector("#tipo-cafe");

// Cargar productos en el carrito
function cargarProductosCarrito() {
    if (productosEnCarrito.length > 0) {
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {
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
                  <h3>${producto.cantidad}</h3>
                </div>
                <div class="carrito-producto-precio">
                  <small>Precio</small>
                  <h3>$${producto.precio}</h3>
                </div>
                <div class="carrito-producto-subtotal">
                  <small>Subtotal</small>
                  <h3>$${producto.precio * producto.cantidad}.000</h3>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
            `;
            contenedorCarritoProductos.append(div);
        });

    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito(); // Inicializa la carga de productos

// Actualizar los botones para eliminar productos
function actualizarBotonesEliminar() {
    const botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

// Eliminar un producto del carrito
function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Vaciar el carrito
botonVaciar.addEventListener("click", () => {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
});

// Actualizar el total
function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    contenedorTotal.innerText = `$${totalCalculado}.000`;
}

// Comprar los productos
botonComprar.addEventListener("click", () => {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
});

// Búsqueda avanzada
formularioBusqueda.addEventListener("submit", (e) => {
  e.preventDefault();

  const regionSeleccionada = campoRegion.value;
  const precioMin = parseFloat(campoPrecioMin.value) || 0;
  const precioMax = parseFloat(campoPrecioMax.value) || Infinity;
  const tipoSeleccionado = campoTipoCafe.value;

  const productosFiltrados = productosEnCarrito.filter(producto => {
      const cumpleRegion = regionSeleccionada === "todos" || producto.region === regionSeleccionada;
      const cumplePrecio = producto.precio >= precioMin && producto.precio <= precioMax;
      const cumpleTipo = tipoSeleccionado === "todos" || producto.tipo === tipoSeleccionado;

      return cumpleRegion && cumplePrecio && cumpleTipo;
  });

  if (productosFiltrados.length > 0) {
      contenedorCarritoProductos.innerHTML = "";

      productosFiltrados.forEach(producto => {
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
                <h3>${producto.cantidad}</h3>
              </div>
              <div class="carrito-producto-precio">
                <small>Precio</small>
                <h3>$${producto.precio}</h3>
              </div>
              <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <h3>$${producto.precio * producto.cantidad}.000</h3>
              </div>
              <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
          `;
          contenedorCarritoProductos.append(div);
      });

      actualizarBotonesEliminar(); // Actualiza botones de eliminar
  } else {
      contenedorCarritoProductos.innerHTML = "<p>No se encontraron productos que coincidan con los criterios de búsqueda.</p>";
  }
});
