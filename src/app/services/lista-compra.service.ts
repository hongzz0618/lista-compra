import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Producto } from '../interfaces/producto.model';
import { ToastController } from '@ionic/angular';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListaCompraService {
  productsChanged = new EventEmitter<Producto[]>();
  imgPath = environment.imgPath

  private producto: Producto[] = [
    { id: "1", nombre: "appetizer", foto: this.imgPath + "appetizer-1238615_1920.jpg" },
    { id: "2", nombre: "apples", foto: this.imgPath + "apples-5821166_1920.jpg" },
    { id: "3", nombre: "baking", foto: this.imgPath + "baking-2996390_1920.jpg" },
    { id: "4", nombre: "bananas", foto: this.imgPath + "bananas-1119790_1920.jpg" },
    { id: "5", nombre: "black", foto: this.imgPath + "black-forest-ham-2278383_1920.jpg" },
    { id: "6", nombre: "blueberries", foto: this.imgPath + "blueberries-690072_1920.jpg" },
    { id: "7", nombre: "bread", foto: this.imgPath + "bread-1281053_1280.jpg" },
    { id: "8", nombre: "bread", foto: this.imgPath + "bread-3467243_1920.jpg" },
    { id: "9", nombre: "bread", foto: this.imgPath + "bread-399286_1920.jpg" },
    { id: "10", nombre: "churros", foto: this.imgPath + "churros-2188871_1920.jpg" },
    { id: "11", nombre: "dim", foto: this.imgPath + "dim-sum-924912_1920.jpg" },
    { id: "12", nombre: "dimsum", foto: this.imgPath + "dimsum-2097947_1920.jpg" },
    { id: "13", nombre: "eat", foto: this.imgPath + "eat-4412531_1920.jpg" },
    { id: "14", nombre: "fruit", foto: this.imgPath + "fruit-1534494_1920.jpg" },
    { id: "15", nombre: "grill", foto: this.imgPath + "grill-party-3524649_1920.jpg" },
    { id: "16", nombre: "gummibarchen", foto: this.imgPath + "gummibarchen-318362_1920.jpg" },
    { id: "17", nombre: "kebab", foto: this.imgPath + "kebab-2052339_1920.jpg" },
    { id: "18", nombre: "korean", foto: this.imgPath + "korean-cuisine-1991580_1920.jpg" },
    { id: "19", nombre: "meat", foto: this.imgPath + "meat-3139641_1920.jpg" },
    { id: "20", nombre: "olive", foto: this.imgPath + "olive-oil-968657_1920.jpg" },
    { id: "21", nombre: "orange", foto: this.imgPath + "orange-1995056_1920.jpg" },
    { id: "22", nombre: "pasta", foto: this.imgPath + "pasta-2093_1920.jpg" },
    { id: "23", nombre: "pizza", foto: this.imgPath + "pizza-1949183_1920.jpg" },
    { id: "24", nombre: "pizza", foto: this.imgPath + "pizza-2802332_1920.jpg" },
    { id: "25", nombre: "pizza", foto: this.imgPath + "pizza-3007395_1920.jpg" },
    { id: "26", nombre: "pomegranate", foto: this.imgPath + "pomegranate-3383814_1920.jpg" },
    { id: "27", nombre: "prawn", foto: this.imgPath + "prawn-1239427_1920.jpg" },
    { id: "28", nombre: "prawns", foto: this.imgPath + "prawns-1239307_1920.jpg" },
    { id: "29", nombre: "raspberries", foto: this.imgPath + "raspberries-5576401_1920.jpg" },
    { id: "30", nombre: "strawberry", foto: this.imgPath + "strawberry-2960533_1920.jpg" },
    { id: "31", nombre: "toast", foto: this.imgPath + "toast-1077984_1920.jpg" },
  ]
  private enFavoritos: any

  constructor(private storage: Storage, public toastController: ToastController) {
    this.cargarDatosLocal();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  async cargarDatosLocal() {

    const localProduct: Producto[] = await this.storage.get('productos');

    if (localProduct) {
      this.producto = localProduct
      this.productsChanged.emit(this.producto.slice())
    }
  }

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

  async deleteProduct(productId: string) {
    //borrar en favoritos
    this.enFavoritos = await this.storage.get('favoritos')
    this.enFavoritos = this.enFavoritos.filter(p => p.id !== productId);
    this.storage.set('favoritos', this.enFavoritos);
    //borrar en compras
    this.producto = this.producto.filter(p => p.id !== productId);
    this.productsChanged.emit(this.producto.slice())
    this.storage.set('productos', this.producto);
    this.presentToast('Producto Borrado');
  }


  addProduct(product: Producto) {
    const existe = this.producto.find(p => p.id === product.id);
    if (!existe) {
      this.producto.push(product);
      this.productsChanged.emit(this.producto.slice())
      this.storage.set('productos', this.producto);
      this.presentToast('un Producto Agregado');
    }
  }
}
