import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaCompraService } from '../lista-compra.service';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  productoD: Producto;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productoService: ListaCompraService,
    private router: Router,
    private alert: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("productId")) {
        this.router.navigate(["/lista-compra"]);
        return;
      }
      const productId = paramMap.get("productId");
      this.productoD = this.productoService.getProduct(productId);
    }
    )
  }

  onDeleteProduct() {
    this.alert.create({
      header: "¿Estás seguro?",
      message: "¿quieres borrar este producto de la lista de compra?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancelar"
        },
        {
          text: "Borrar",
          handler: () => {
            this.productoService.deleteProduct(this.productoD.id)
            this.router.navigate(["/lista-compra"]);
          }
        }]
    }).then(el => {
      el.present();
    })
  }
}
