import { Component, OnInit } from '@angular/core';
import { ListaCompraService } from 'src/app/services/lista-compra.service';
import { Producto } from 'src/app/interfaces/producto.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  page_name = "Lista de Compra"
  producto: Producto[];

  constructor(private productoService: ListaCompraService) {

  }

  ngOnInit() {
    this.producto = this.productoService.getAllProducts();
    this.productoService.productsChanged
      .subscribe(
        (producto: Producto[]) => {
          this.producto = producto;
        }
      )
  }

}
