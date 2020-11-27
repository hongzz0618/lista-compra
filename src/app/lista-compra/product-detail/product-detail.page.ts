import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaCompraService } from '../lista-compra.service';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  productoD: Producto;
  constructor(private activatedRoute: ActivatedRoute, private productoService: ListaCompraService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("productId")) {
        return;
      }
      const productId = paramMap.get("productId");
      this.productoD = this.productoService.getProduct(productId);
    }
    )
  }
}
