import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-compra-items',
  templateUrl: './lista-compra-items.component.html',
  styleUrls: ['./lista-compra-items.component.scss'],
})
export class ListaCompraItemsComponent implements OnInit {
  @Input("producto") item:any;
  constructor() { }

  ngOnInit() {}

}
