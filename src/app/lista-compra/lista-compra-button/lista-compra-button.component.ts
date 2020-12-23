import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-lista-compra-button',
  templateUrl: './lista-compra-button.component.html',
  styleUrls: ['./lista-compra-button.component.scss'],
})
export class ListaCompraButtonComponent implements OnInit {

  // @ViewChild("nameproduct") nameInputRef: ElementRef
  // @ViewChild("fotoproduct") fotoInputRef: ElementRef
  name = ""
  foto = ""
  @Output() productoAdded = new EventEmitter<Producto>()

  constructor() { }

  ngOnInit() { }

  onAddProduct() {

    // let pname = this.name
    // let pfoto = this.fotoInputRef.nativeElement.value
    if (this.name && this.foto) {
      let newProducto = {
        id: "9",
        nombre: this.name,
        // nombre: this.productname,
        marca: "Hacendado",
        cantidad_neta: "460g",
        Ingredientes: "Harina integral de trigo (gluten) (59%), agua, levadura, gluten de trigo, azúcar, aceite de girasol (1%), sal, fibra de trigo (gluten), vinagre de vino, harina integral de cebada malteada (gluten) (0.2%), emulgentes (E-472e, E-471), conservadores (E-282, E-202, E-200). Puede contener trazas de semillas de sésamo y soja.",
        foto: this.foto,
        // foto: this.productfoto,
        foto2: "https://i0.wp.com/martalopeznutricionista.com/wp-content/uploads/2020/03/Sin-t%C3%ADtulod.png?w=479&ssl=1"
      }
      this.productoAdded.emit(newProducto)
    }
  }
}
