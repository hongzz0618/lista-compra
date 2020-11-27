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
    },
    {
      nombre:"Leche semidesnatada +proteinas",
      marca:"Hacendado",
      cantidad_neta:"1 l",
      Ingredientes:"Leche semidesnatada, concentrado de proteínas y calcio de la leche, estabilizante (E339).",
      foto:"https://static.openfoodfacts.org/images/products/848/000/010/6681/front_es.13.full.jpg",
      foto2:"https://static.openfoodfacts.org/images/products/848/000/010/6681/nutrition_es.15.full.jpg"
    },
    {
      nombre:"Guacamole Montosa",
      marca:"Hacendado",
      cantidad_neta:"200g",
      Ingredientes:"Aguacate 95%, cebolla deshidratada, sal, jalapeño, azúcar, ácido cítrico, ácido ascórbico, antioxidantes (E-301 y E-331), conservador (E-202), aroma de ajo y cilantro deshidratado.",
      foto:"https://www.veganoporaccidentespain.com/wp-content/uploads/2020/04/Guacamole-Mercadona.jpg",
      foto2:"https://www.veganoporaccidentespain.com/wp-content/uploads/2020/04/Guacamole-Mercadona-informacion-nutricional.jpg"
    },
    {
      nombre:"Yogur de proteínas",
      marca:"Hacendado",
      cantidad_neta:"120g x 4",
      Ingredientes:"Leche desnatada, Arandanos o fresas según la versión (7,5%), Agua, Aructosa, Almidon modificado, Aromas...",
      foto:"https://www.aprendiznutricional.com/wp-content/uploads/2019/05/Yogur-de-proteinas-de-mercadona-arandanos-1.jpg",
      foto2:"https://www.aprendiznutricional.com/wp-content/uploads/2019/05/Yogur-de-proteinas-de-mercadona-arandanos-2.jpg"
    },
    {
      nombre:"Lomo embuchado",
      marca:"Hacendado",
      cantidad_neta:"125 g (31,25g x 4)",
      Ingredientes:"Lomo de cerdo, sal, pimentones, dextrosa, ajo, antioxidantes (E-331, E-301), aromas y conservadores (E-250, E-252).",
      foto:"https://static.openfoodfacts.org/images/products/848/000/059/0756/front_es.23.400.jpg",
      foto2:"https://static.openfoodfacts.org/images/products/848/000/059/0756/ingredients_es.25.400.jpg"
    },
    {
      nombre:"Jamón serrano reserva",
      marca:"Hacendado",
      cantidad_neta:"2 x 120 g",
      Ingredientes:"Jamón de cerdo, sal, azúcar antioxidantes (E-331, E-301) y conservadores (E-252, E-250).",
      foto:"https://static.openfoodfacts.org/images/products/848/000/059/1524/front_es.12.400.jpg",
      foto2:"https://static.openfoodfacts.org/images/products/848/000/059/1524/ingredients_es.16.400.jpg"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
