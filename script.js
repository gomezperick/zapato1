
// Mostrar u ocultar el carrito
function toggleCarrito() {
  const carritoDiv = document.getElementById("carrito");
  carritoDiv.style.display = carritoDiv.style.display === "none" ? "block" : "none";
}

// Actualiza el contador de productos en el carrito
function actualizarContadorCarrito() {
  document.getElementById("contador-carrito").textContent = carrito.length;
}

// Agrega un producto al carrito
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarContadorCarrito();
  mostrarCarrito();
}

// Muestra los productos en el div del carrito
function mostrarCarrito() {
  const carritoDiv = document.getElementById("carrito");
  carritoDiv.innerHTML = "";

  if (carrito.length === 0) {
    carritoDiv.innerHTML = "<p>Tu carrito est� vac�o.</p>";
    return;
  }

  const lista = document.createElement("ul");

  carrito.forEach((producto, index) => {
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} - $${producto.precio}`;
    lista.appendChild(item);
  });

  carritoDiv.appendChild(lista);
}
function enviarFormulario(event) {
    event.preventDefault(); // Evita que se recargue la p�gina
  
    // Obtener los valores
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    // Validaci�n b�sica (opcional si ya tienes "required" en HTML)
    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Aqu� puedes enviar los datos al servidor si quieres (usando fetch, por ejemplo)
  
    // Mostrar mensaje de �xito
    document.getElementById("mensajeEnviado").textContent = "�Gracias por tu mensaje, " + nombre + "!";
  
    // Limpiar el formulario
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
  }
  
  let carrito = [];
function agregarAlCarrito(nombre, precio) {
    const producto = carrito.find(item => item.nombre === nombre);
    if (producto) {
        producto.cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    const contador = document.getElementById('contador-carrito');
    contador.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    mostrarCarrito();
}

function mostrarCarrito() {
    let carritoHTML = '<h3>Carrito</h3>';
    if (carrito.length === 0) {
        carritoHTML += '<p>El carrito está vacío.</p>';
    } else {
        carritoHTML += '<ul>';
        carrito.forEach(item => {
            carritoHTML += `<li>${item.nombre} x${item.cantidad} - Q${item.precio * item.cantidad}</li>`;
        });
        carritoHTML += '</ul>';
        carritoHTML += `<p><strong>Total: Q${calcularTotal()}</strong></p>`;
    }
    document.getElementById('carrito-desplegable').innerHTML = carritoHTML;
}

function calcularTotal() {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

function toggleCarrito() {
    const carritoBox = document.getElementById('carrito-desplegable');
    carritoBox.style.display = carritoBox.style.display === 'block' ? 'none' : 'block';
}

