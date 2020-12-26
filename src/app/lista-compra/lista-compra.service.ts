import { Injectable, EventEmitter } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ListaCompraService {
  productsChanged = new EventEmitter <Producto[]>();
  private producto: Producto[] = [
    {
      id: "1",
      nombre: "Pan de molde 100% integral",
      marca: "Hacendado",
      cantidad_neta: "460g",
      Ingredientes: "Harina integral de trigo (gluten) (59%), agua, levadura, gluten de trigo, azúcar, aceite de girasol (1%), sal, fibra de trigo (gluten), vinagre de vino, harina integral de cebada malteada (gluten) (0.2%), emulgentes (E-472e, E-471), conservadores (E-282, E-202, E-200). Puede contener trazas de semillas de sésamo y soja.",
      foto: "https://i1.wp.com/martalopeznutricionista.com/wp-content/uploads/2020/03/Sin-t%C3%ADtulo.png?w=249&ssl=1",
      foto2: "https://i0.wp.com/martalopeznutricionista.com/wp-content/uploads/2020/03/Sin-t%C3%ADtulod.png?w=479&ssl=1"
    },
    {
      id: "2",
      nombre: "Leche semidesnatada +proteinas",
      marca: "Hacendado",
      cantidad_neta: "1 l",
      Ingredientes: "Leche semidesnatada, concentrado de proteínas y calcio de la leche, estabilizante (E339).",
      foto: "https://static.openfoodfacts.org/images/products/848/000/010/6681/front_es.13.full.jpg",
      foto2: "https://static.openfoodfacts.org/images/products/848/000/010/6681/nutrition_es.15.full.jpg"
    },
    {
      id: "3",
      nombre: "Guacamole Montosa",
      marca: "Hacendado",
      cantidad_neta: "200g",
      Ingredientes: "Aguacate 95%, cebolla deshidratada, sal, jalapeño, azúcar, ácido cítrico, ácido ascórbico, antioxidantes (E-301 y E-331), conservador (E-202), aroma de ajo y cilantro deshidratado.",
      foto: "data:image/jpeg;base64,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",
      foto2: "https://static.openfoodfacts.org/images/products/843/600/852/1025/nutrition_es.26.full.jpg"
    },
    {
      id: "4",
      nombre: "Yogur de proteínas",
      marca: "Hacendado",
      cantidad_neta: "120g x 4",
      Ingredientes: "Leche desnatada, Arandanos o fresas según la versión (7,5%), Agua, Aructosa, Almidon modificado, Aromas...",
      foto: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/yogures-protei-nas-1579772653.jpg?crop=1.00xw:0.726xh;0,0.123xh&resize=640:*",
      foto2: "https://static.openfoodfacts.org/images/products/848/000/021/1514/nutrition_es.34.full.jpg"
    },
    {
      id: "5",
      nombre: "Lomo embuchado",
      marca: "Hacendado",
      cantidad_neta: "125 g (31,25g x 4)",
      Ingredientes: "Lomo de cerdo, sal, pimentones, dextrosa, ajo, antioxidantes (E-331, E-301), aromas y conservadores (E-250, E-252).",
      foto: "https://static.openfoodfacts.org/images/products/848/000/059/0756/front_es.23.400.jpg",
      foto2: "https://static.openfoodfacts.org/images/products/848/000/059/0756/ingredients_es.25.400.jpg"
    },
    {
      id: "6",
      nombre: "Jamón serrano reserva",
      marca: "Hacendado",
      cantidad_neta: "2 x 120 g",
      Ingredientes: "Jamón de cerdo, sal, azúcar antioxidantes (E-331, E-301) y conservadores (E-252, E-250).",
      foto: "https://static.openfoodfacts.org/images/products/848/000/059/1524/front_es.12.400.jpg",
      foto2: "https://static.openfoodfacts.org/images/products/848/000/059/1524/ingredients_es.16.400.jpg"
    },
    {
      id: "7",
      nombre: "Mango congelada",
      marca: "Hacendado",
      cantidad_neta: "300 g",
      Ingredientes: "pulpa de mango congelado...",
      foto: "https://dondeyocompro.com/wp-content/uploads/2017/08/IMG_3064.jpg",
      foto2: "https://static.openfoodfacts.org/images/products/848/000/061/0263/nutrition_es.9.full.jpg"
    }
  ]
  constructor() { }

  getAllProducts() {
    return this.producto.slice();
  }

  getProduct(productId: string) {
    return {
      ...this.producto.find(item => {
        return item.id === productId;
      })
    };
  }

  deleteProduct(productId: string) {
    this.producto = this.producto.filter(item => {
      return item.id !== productId;
    });
    this.productsChanged.emit(this.producto.slice())
  }
}
