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
  page_name = "Lista de Compra"
  text = ""
  blank = ""
  Xcli = "ngIf false"
  button = false
  log = [];
  constructor(private productoService: ListaCompraService) {

  }

  ngOnInit() {
    // setTimeout(()=>{
    //   this.button=false
    // },2000)
    this.producto = this.productoService.getAllProducts();
  }
  logmasuno() {
    this.log.push(this.log.length + 1)
  }
  Xclick() {
    this.Xcli = "ngIf true"
    this.button = true
    // this.text=this.blank
  }
  targetvalue(event: Event) {
    this.text = (<HTMLInputElement>event.target).value
  }
}
