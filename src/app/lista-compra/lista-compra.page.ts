import { Component, OnInit } from '@angular/core';
import { Producto } from './producto.model';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.page.html',
  styleUrls: ['./lista-compra.page.scss'],
})
export class ListaCompraPage implements OnInit {
  producto: Producto[]=[
    {
      nombre:"Pan de molde 100% integral",
      marca:"Hacendado",
      cantidad_neta:"460g",
      Ingredientes:"Harina integral de trigo (gluten) (59%), agua, levadura, gluten de trigo, azúcar, aceite de girasol (1%), sal, fibra de trigo (gluten), vinagre de vino, harina integral de cebada malteada (gluten) (0.2%), emulgentes (E-472e, E-471), conservadores (E-282, E-202, E-200). Puede contener trazas de semillas de sésamo y soja.",
      foto:"https://i1.wp.com/martalopeznutricionista.com/wp-content/uploads/2020/03/Sin-t%C3%ADtulo.png?w=249&ssl=1",
      foto2:"https://i0.wp.com/martalopeznutricionista.com/wp-content/uploads/2020/03/Sin-t%C3%ADtulod.png?w=479&ssl=1"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
