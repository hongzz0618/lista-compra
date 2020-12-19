import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-compra-items',
  templateUrl: './lista-compra-items.component.html',
  styleUrls: ['./lista-compra-items.component.scss'],
})
export class ListaCompraItemsComponent implements OnInit {
  @Input("producto") item:{id: string,nombre: string,marca: string,cantidad_neta: string,Ingredientes: string,foto: string,foto2: string};
  constructor() { }

  ngOnInit() {}

}
