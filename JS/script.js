const productos = [
  // Tipos de Café
  {
      id: "cafe-cultor",
      titulo: "Café Cultor",
      imagen: "./Assets/cafe_cultor.jpg",
      categoria: {
          nombre: "Café de Antioquia",
          id: "antioquia"
      },
      precio: "40.000"
  },
  {
      id: "cafe-honesto",
      titulo: "Café Honesto",
      imagen: "./Assets/cafe_honesto.jpg",
      categoria: {
          nombre: "Café de Antioquia",
          id: "antioquia"
      },
      precio: "40.000"
  },
  {
      id: "cafe-valdez",
      titulo: "Café Valdéz",
      imagen: "./Assets/cafe_valdez.jpg",
      categoria: {
          nombre: "Café de Antioquia",
          id: "antioquia"
      },
      precio: "45.000"
  },
  {
      id: "cafe-divisas",
      titulo: "Café Divisas",
      imagen: "./Assets/cafe_divisas.jpg",
      categoria: {
          nombre: "Café de Antioquia",
          id: "antioquia"
      },
      precio: "45.000"
  },
  {
      id: "cafe-3caminos",
      titulo: "Café 3Caminos",
      imagen: "./Assets/cafe_3caminos.jpg",
      categoria: {
          nombre: "Café de Antioquia",
          id: "antioquia"
      },
      precio: "45.000"
  },
  {
      id: "cafe-dulcearmonia",
      titulo: "Café Dulce Armonía",
      imagen: "./Assets/cafe_dulcearmonia.jpg",
      categoria: {
          nombre: "Café de Antioquia",
          id: "antioquia"
      },
      precio: "40.000"
  },
  {
      id: "cafe-organico",
      titulo: "Café Orgánico",
      imagen: "./Assets/cafe_organico.jpg",
      categoria: {
          nombre: "Café de Antioquia",
          id: "antioquia"
      },
      precio: "45.000"
  },
  {
      id: "cafe-savalo",
      titulo: "Café Savalo",
      imagen: "./Assets/cafe_savalo.jpg",
      categoria: {
          nombre: "Café de Antioquia",
          id: "antioquia"
      },
      precio: "40.000"
  },
  {
      id: "cafe-tostao",
      titulo: "Café Tostao",
      imagen: "./Assets/cafe_tostao.jpg",
      categoria: {
          nombre: "Café de Antioquia",
          id: "antioquia"
      },
      precio: "45.000"
  },
  {
      id: "cafe-venecia",
      titulo: "Café Venecia",
      imagen: "./Assets/cafe_venecia.jpg",
      categoria: {
          nombre: "Café de Antioquia",
          id: "antioquia"
      },
      precio: "45.000"
  },
  {
      id: "cafe-hacienda",
      titulo: "Café Hacienda",
      imagen: "./Assets/cafe_hacienda.jpg",
      categoria: {
          nombre: "Café de Quindio",
          id: "quindio"
      },
      precio: "40.000"
  },
  {
      id: "cafe-lucerna",
      titulo: "Café Lucerna",
      imagen: "./Assets/cafe_lucerna.jpg",
      categoria: {
          nombre: "Café de Quindio",
          id: "quindio"
      },
      precio: "40.000"
  },
  {
      id: "cafe-quindio",
      titulo: "Café Quindío",
      imagen: "./Assets/cafe_quindio.jpg",
      categoria: {
          nombre: "Café de Quindio",
          id: "quindio"
      },
      precio: "40.000"
  },
  {
      id: "cafe-vereda",
      titulo: "Café La Vereda",
      imagen: "./Assets/cafe_vereda.jpg",
      categoria: {
          nombre: "Café de Quindio",
          id: "quindio"
      },
      precio: "45.000"
  },
  {
      id: "cafe-lomaprieta",
      titulo: "Café Lomaprieta",
      imagen: "./Assets/cafe_lomaprieta.jpg",
      categoria: {
          nombre: "Café de Quindio",
          id: "quindio"
      },
      precio: "45.000"
  },
  {
      id: "cafe-nariño",
      titulo: "Café Nariño",
      imagen: "./Assets/cafe_nariño.jpg",
      categoria: {
          nombre: "Café de Nariño",
          id: "narino"
      },
      precio: "40.000"
  },
  {
      id: "cafe-valdeznariño",
      titulo: "Café Valdéz Nariño",
      imagen: "./Assets/cafe_valdeznariño.jpg",
      categoria: {
          nombre: "Café de Nariño",
          id: "narino"
      },
      precio: "40.000"
  },
  {
      id: "cafe-excelso",
      titulo: "Café Excelso",
      imagen: "./Assets/cafe_excelso.jpg",
      categoria: {
          nombre: "Café de Nariño",
          id: "narino"
      },
      precio: "45.000"
  },
  {
      id: "cafe-obraje",
      titulo: "Café Obraje",
      imagen: "./Assets/cafe_obraje.jpg",
      categoria: {
          nombre: "Café de Nariño",
          id: "narino"
      },
      precio: "45.000"
  },
  {
      id: "cafe-dulcearmonia",
      titulo: "Café Dulce Armonia",
      imagen: "./Assets/cafe_dulcearmonia.jpg",
      categoria: {
          nombre: "Café de Nariño",
          id: "narino"
      },
      precio: "40.000"
  }
];

//traer elementos del DOM, son funciones declaradas en ambito global 
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar"); //let porque se debe modificar despues
const numerito = document.querySelector("#numerito");

//Este bloque de codigo carga los productos creados como objetos
function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";  //mantiene vacio cada que apreto un boton distinto de la lista

  productosElegidos.forEach(producto => {

      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
          <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
          <div class="producto-detalles">
              <h3 class="producto-titulo">${producto.titulo}</h3>
              <p class="producto-precio">$${producto.precio}</p>
              <button class="producto-agregar" id="${producto.id}">Agregar al carrito</button>
          </div>
      `;

      contenedorProductos.append(div);
  })

  actualizarBotonesAgregar();
}
cargarProductos(productos);

//Este bloque de codigo ubica el active del boton donde el cliente lo seleccione
//currentTarget se usa para que el click abarque la totalidad del boton y no solamente en la letra 
botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

      botonesCategorias.forEach(boton => boton.classList.remove("active"));
      e.currentTarget.classList.add("active");

      if (e.currentTarget.id != "todos") {
          
          const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
          tituloPrincipal.innerText = productoCategoria.categoria.nombre;
          
          const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
          cargarProductos(productosBoton);
      } else {
          tituloPrincipal.innerText = "Todos los productos";
          cargarProductos(productos);
      }

  })
});

//Este bloque de codigo da funcionalidad a los botones de los productos para que se agregen al carrito
function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
if (productosEnCarritoLS) {
  productosEnCarrito = productosEnCarritoLS;
  actualizarNumerito();
}else{
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  //este if se agrega para garantizar que si el producto ya existe se sume y aumente la cantidad
  //some devuelve true o false dependiendo si el articulo ya se encuentra en el array
  if(productosEnCarrito.some(producto => producto.id === idBoton)) {
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
      productosEnCarrito[index].cantidad++; 
      //encuentra el indice y va sumando los repetidos
  } else{  
      productoAgregado.cantidad = 1;
      productosEnCarrito.push(productoAgregado)
      //en el else si el producto no esta agregado aún, entonces lo agrega como 1 inicialmente
  }

  actualizarNumerito();
  
  //este array completo osea la funcion completa hay que guardarlo en el localstorage para poder 
  //usarlo en la pagina del carrito y ya no se llamaria la funcion sino que directamente queda
  //guardado en el localstorage
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
  //esta función es un acumulador para que el contador del numerito al lado del boton carrito
  //se aumente a medida que damos click
}