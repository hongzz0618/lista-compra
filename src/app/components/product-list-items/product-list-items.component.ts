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

    this.router.navigate(["/tabs/tab3/" + id,
    { enFavoritos: this.enFavoritos }]);


  }

}
