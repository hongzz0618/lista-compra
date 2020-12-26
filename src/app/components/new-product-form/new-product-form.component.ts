import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/lista-compra/producto.model';
import { ListaCompraService } from 'src/app/lista-compra/lista-compra.service';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.scss'],
})
export class NewProductFormComponent implements OnInit {
  productos = {
    "id": 0,
    "name": "",
    "marca": "",
    "cantidad": "",
    "Ingredientes": "",
    "foto": ""
  }

  producto: Producto[];
  @Output() productoAdded = new EventEmitter<Producto>()

  constructor(private productoService: ListaCompraService) { }

  ngOnInit() {
    this.producto = this.productoService.getAllProducts();
    this.productoService.productsChanged
      .subscribe(
        (producto: Producto[]) => {
          this.producto = producto;
          this.productos.id = producto.length + 1;
        }
      )
  }

  onAddProduct() {

    if (this.productos.name && this.productos.foto) {
      let newProducto = {
        id: this.productos.id.toString(),
        nombre: this.productos.name,
        marca: this.productos.marca,
        cantidad_neta: this.productos.cantidad,
        Ingredientes: this.productos.Ingredientes,
        foto: this.productos.foto,
      }
      this.productoAdded.emit(newProducto)
      console.log(newProducto.id)
    }
  }

}
