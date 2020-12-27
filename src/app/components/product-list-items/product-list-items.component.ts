import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-items',
  templateUrl: './product-list-items.component.html',
  styleUrls: ['./product-list-items.component.scss'],
})
export class ProductListItemsComponent implements OnInit {
  @Input("producto") item: any;
  @Input() enFavoritos = false;
  constructor(private router: Router) { }

  ngOnInit() { }

  redirectItem(id) {
    let tab1 = "/tabs/tab1/" + id
    let tab2 = "/tabs/tab2/" + id
    if (this.enFavoritos) {
      this.router.navigate([tab2,
        { enFavoritos: this.enFavoritos }]);
    } else {
      this.router.navigate([tab1,
        { enFavoritos: this.enFavoritos }]);
    }

  }

}
