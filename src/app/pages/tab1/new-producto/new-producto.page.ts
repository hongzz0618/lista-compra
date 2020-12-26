import { Component, OnInit } from '@angular/core';
import { ListaCompraService } from 'src/app/lista-compra/lista-compra.service';
import { Producto } from 'src/app/lista-compra/producto.model';

@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.page.html',
  styleUrls: ['./new-producto.page.scss'],
})
export class NewProductoPage implements OnInit {

  constructor(private productoService: ListaCompraService) { }

  ngOnInit() {
  }

  onProductAdded(product: Producto) {
    this.productoService.addProduct(product)
  }
}
