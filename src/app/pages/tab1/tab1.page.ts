import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaCompraService } from 'src/app/services/lista-compra.service';
import { Producto } from 'src/app/interfaces/producto.model';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  page_name = "Home"
  producto: Producto[];
  comida: any;
  carne: any;
  fashion: any;
  postres: any;
  masvendidos: any;

  // slideOpts = {
  //   slidesPerView: 2.5,
  //   centeredSlides: true,
  //   slideActiveClass: 'active-slide',
  // };
  slideOpts = {
    slidesPerView: 1,
    initialSlide:0,
    speed:400
  };
  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;

  constructor(private productoService: ListaCompraService) { }

  ngOnInit() {
    this.producto = this.productoService.getAllProducts();
    this.productoService.productsChanged
      .subscribe(
        (producto: Producto[]) => {
          this.producto = producto;
        }
      )
    this.comida = this.productoService.getProductsByCategory("comida")
    this.carne = this.productoService.getProductsByCategory("carne")
    this.fashion = this.productoService.getProductsByCategory("fashion")
    this.postres = this.productoService.getProductsByCategory("postres")
    this.masvendidos = this.productoService.getProductsByCategory("masvendidos")
  }

  async segmentChanged(event) {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

}