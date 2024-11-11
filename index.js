class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  class Carrito {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
      console.log(`${producto.nombre} ha sido agregado al carrito.`);
    }
  
    eliminarProducto(nombreProducto) {
      this.productos = this.productos.filter(producto => producto.nombre !== nombreProducto);
      console.log(`${nombreProducto} ha sido eliminado del carrito.`);
    }
  
    mostrarTotal() {
      const total = this.productos.reduce((sum, producto) => sum + producto.precio, 0);
      console.log(`Total a pagar: $${total.toFixed(2)}`);
    }
  
    verCarrito() {
      if (this.productos.length === 0) {
        console.log("El carrito está vacío.");
      } else {
        console.log("Productos en el carrito:");
        this.productos.forEach((producto, index) => {
          console.log(`${index + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)}`);
        });
      }
    }
  }
//HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  function sumar(){
    console.log("Hola Mundo");
  }
  
  // Ejemplo de uso:
  const carrito = new Carrito();
  
  const producto1 = new Producto("Camisa", 20.00);
  const producto2 = new Producto("Pantalón", 30.00);
  
  carrito.agregarProducto(producto1);
  carrito.agregarProducto(producto2);
  carrito.verCarrito();
  carrito.mostrarTotal();
  
  carrito.eliminarProducto("Camisa");
  carrito.verCarrito();
  carrito.mostrarTotal();
  