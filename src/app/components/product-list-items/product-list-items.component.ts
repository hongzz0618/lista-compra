import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-items',
  templateUrl: './product-list-items.component.html',
  styleUrls: ['./product-list-items.component.scss'],
})
export class ProductListItemsComponent implements OnInit {
  @Input("producto") item:any;
  constructor() { }

  ngOnInit() {}

}
