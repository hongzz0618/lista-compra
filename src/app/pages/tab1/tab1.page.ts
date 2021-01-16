import { Component, OnInit } from '@angular/core';
import { ListaCompraService } from 'src/app/services/lista-compra.service';
import { Producto } from 'src/app/interfaces/producto.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  page_name = "Home"
  producto: Producto[];
  fruta: any;
  carne: any;
  comidaprincipal: any;
  ropa: any;
  postres: any;
  otros: any;
  masvendidos: any;
  category: any = ["Todos", "Frutas", "Carnes", "CPrincipal", "Ropa", "Postres", "Otros"];

  slideOpts = {
    slidesPerView: 2.5,
    centeredSlides: true,
    slideActiveClass: 'active-slide',
  };

  constructor(private productoService: ListaCompraService) { }

  ngOnInit() {
    this.producto = this.productoService.getAllProducts();
    this.productoService.productsChanged
      .subscribe(
        (producto: Producto[]) => {
          this.producto = producto;
        }
      )
    this.fruta = this.productoService.getProductsByCategory("fruta")
    this.carne = this.productoService.getProductsByCategory("carne")
    this.comidaprincipal = this.productoService.getProductsByCategory("comidaprincipal")
    this.ropa = this.productoService.getProductsByCategory("ropa")
    this.postres = this.productoService.getProductsByCategory("postres")
    this.otros = this.productoService.getProductsByCategory("otros")
    this.masvendidos = this.productoService.getProductsByCategory("masvendidos")
  }

}
