import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  producto = {
    descripcion: "Descripción",
    nombre: "Nuevo Producto",
    precio: "$100"
  }

  mostrarProducto(){
    return `${this.producto.descripcion}: ${this.producto.nombre}, ${this.producto.precio}`;
  }

}
