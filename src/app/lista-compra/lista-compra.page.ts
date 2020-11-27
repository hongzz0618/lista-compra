import { Component, OnInit } from '@angular/core';
import { Producto } from './producto.model';
import { ListaCompraService } from './lista-compra.service';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.page.html',
  styleUrls: ['./lista-compra.page.scss'],
})
export class ListaCompraPage implements OnInit {

  producto: Producto[];
  constructor(private productoService: ListaCompraService) { }

  ngOnInit() {
    this.producto = this.productoService.getAllProducts();
  }

}
