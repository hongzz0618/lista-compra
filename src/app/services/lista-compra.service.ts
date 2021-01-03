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
    { id: "1", nombre: "sartén marrón", foto: this.imgPath + "Amercook-Sarten-Amercook-Terracotta-26-cm-1760954908-min.jpg", categoria: ["otros"] },
    { id: "2", nombre: "mochila azul", foto: this.imgPath + "MUNICH_ICE-BACKPACK_6500175_A-1531330841-min.jpg", categoria: ["ropa", "otros"] },
    { id: "3", nombre: "airpods", foto: this.imgPath + "airpods-1920x1280-min.jpg", categoria: ["otros", "masvendidos"] },
    { id: "4", nombre: "sandwich", foto: this.imgPath + "appetizer-1238615_1920.jpg", categoria: ["carne", "comidaprincipal"] },
    { id: "5", nombre: "iphone", foto: this.imgPath + "apple-iphone-11-pro-max-hands-on-jc-back-of-phone-1-1920x1280-min.jpg", categoria: ["otros", "masvendidos"] },
    { id: "6", nombre: "manzana roja", foto: this.imgPath + "apples-5821166_1920.jpg", categoria: ["fruta", "postres"] },
    { id: "7", nombre: "empanadillas chinas", foto: this.imgPath + "baking-2996390_1920.jpg", categoria: ["carne", "comidaprincipal"] },
    { id: "8", nombre: "bananas", foto: this.imgPath + "bananas-1119790_1920.jpg", categoria: ["fruta", "postres", "masvendidos"] },
    { id: "9", nombre: "jamón", foto: this.imgPath + "black-forest-ham-2278383_1920.jpg", categoria: ["carne"] },
    { id: "10", nombre: "blueberries", foto: this.imgPath + "blueberries-690072_1920.jpg", categoria: ["fruta", "postres"] },
    { id: "11", nombre: "bread", foto: this.imgPath + "bread-1281053_1280.jpg", categoria: ["comidaprincipal", "masvendidos"] },
    { id: "12", nombre: "bread", foto: this.imgPath + "bread-3467243_1920.jpg", categoria: ["comidaprincipal"] },
    { id: "13", nombre: "bread", foto: this.imgPath + "bread-399286_1920.jpg", categoria: ["comidaprincipal"] },
    { id: "14", nombre: "zapatos brown", foto: this.imgPath + "brown-shoes-1150071_1920.jpg", categoria: ["ropa"] },
    { id: "15", nombre: "zapatos business", foto: this.imgPath + "businessman-1284463_1920.jpg", categoria: ["ropa"] },
    { id: "16", nombre: "carrots", foto: this.imgPath + "carrots-4689897_1920.jpg", categoria: ["fruta"] },
    { id: "17", nombre: "cascos", foto: this.imgPath + "cascos-min.jpg", categoria: ["otros", "masvendidos"] },
    { id: "18", nombre: "churros", foto: this.imgPath + "churros-2188871_1920.jpg", categoria: ["comidaprincipal"] },
    { id: "19", nombre: "xiao long bao", foto: this.imgPath + "dim-sum-924912_1920.jpg", categoria: ["carne", "comidaprincipal", "masvendidos"] },
    { id: "20", nombre: "empanadillas", foto: this.imgPath + "dimsum-2097947_1920.jpg", categoria: ["carne", "comidaprincipal"] },
    { id: "21", nombre: "gambas pierna larga", foto: this.imgPath + "eat-4412531_1920.jpg", categoria: ["carne"] },
    { id: "22", nombre: "egg", foto: this.imgPath + "egg-944495_1920.jpg", categoria: ["carne"] },
    { id: "23", nombre: "tacones fashion", foto: this.imgPath + "fashion-1284496_1920.jpg", categoria: ["ropa", "masvendidos"] },
    { id: "24", nombre: "pera", foto: this.imgPath + "fruit-1534494_1920.jpg", categoria: ["fruta", "postres"] },
    { id: "25", nombre: "zumo fruit", foto: this.imgPath + "fruit-cocktails-1446093_1920.jpg", categoria: ["fruta", "masvendidos"] },
    { id: "26", nombre: "sanchichas", foto: this.imgPath + "grill-party-3524649_1920.jpg", categoria: ["carne"] },
    { id: "27", nombre: "gummibarchen", foto: this.imgPath + "gummibarchen-318362_1920.jpg", categoria: ["fruta", "carne", "comidaprincipal", "postres", "ropa", "otros", "masvendidos"] },
    { id: "28", nombre: "candy", foto: this.imgPath + "hemp-wear-canamo-sliderhome02-min.jpg", categoria: ["postres", "otros"] },
    { id: "29", nombre: "mochila verde", foto: this.imgPath + "hiking-1149891_1920.jpg", categoria: ["ropa", "otros"] },
    { id: "30", nombre: "ice cream", foto: this.imgPath + "ice-cream-770994_1920.jpg", categoria: ["postres"] },
    { id: "31", nombre: "ice cream", foto: this.imgPath + "ice-cream-926426_1920.jpg", categoria: ["postres"] },
    { id: "32", nombre: "ice cream", foto: this.imgPath + "ice-cream-cone-1274894_1920.jpg", categoria: ["postres"] },
    { id: "33", nombre: "kebab", foto: this.imgPath + "kebab-2052339_1920.jpg", categoria: ["carne", "comidaprincipal", "masvendidos"] },
    { id: "34", nombre: "gambas fritos", foto: this.imgPath + "korean-cuisine-1991580_1920.jpg", categoria: ["carne", "masvendidos"] },
    { id: "35", nombre: "leek", foto: this.imgPath + "leek-4862962_1920.jpg", categoria: ["fruta"] },
    { id: "36", nombre: "entrecot", foto: this.imgPath + "meat-3139641_1920.jpg", categoria: ["carne", "masvendidos"] },
    { id: "37", nombre: "milk", foto: this.imgPath + "milk-2474993_1920.jpg", categoria: ["otros"] },
    { id: "38", nombre: "nokia", foto: this.imgPath + "nokia-min.jpeg", categoria: ["otros"] },
    { id: "39", nombre: "aceite oliva", foto: this.imgPath + "olive-oil-968657_1920.jpg", categoria: ["otros"] },
    { id: "40", nombre: "orange", foto: this.imgPath + "orange-1995056_1920.jpg", categoria: ["fruta", "postres"] },
    { id: "41", nombre: "pasta", foto: this.imgPath + "pasta-2093_1920.jpg", categoria: ["comidaprincipal", "masvendidos"] },
    { id: "42", nombre: "pizza", foto: this.imgPath + "pizza-1949183_1920.jpg", categoria: ["carne", "comidaprincipal"] },
    { id: "43", nombre: "pizza", foto: this.imgPath + "pizza-2802332_1920.jpg", categoria: ["carne", "comidaprincipal"] },
    { id: "44", nombre: "pizza", foto: this.imgPath + "pizza-3007395_1920.jpg", categoria: ["carne", "comidaprincipal", "postres", "ropa", "otros", "masvendidos"] },
    { id: "45", nombre: "pomegranate", foto: this.imgPath + "pomegranate-3383814_1920.jpg", categoria: ["fruta"] },
    { id: "46", nombre: "prawn", foto: this.imgPath + "prawn-1239427_1920.jpg", categoria: ["carne"] },
    { id: "47", nombre: "prawns", foto: this.imgPath + "prawns-1239307_1920.jpg", categoria: ["carne"] },
    { id: "48", nombre: "raspberries", foto: this.imgPath + "raspberries-5576401_1920.jpg", categoria: ["fruta", "postres", "masvendidos"] },
    { id: "49", nombre: "pilas", foto: this.imgPath + "recharge-2387087_1920.jpg", categoria: ["otros", "masvendidos"] },
    { id: "50", nombre: "shoes verde", foto: this.imgPath + "shoes-505471_1920.jpg", categoria: ["ropa"] },
    { id: "51", nombre: "shoes gris", foto: this.imgPath + "shoes-584850_1920.jpg", categoria: ["ropa"] },
    { id: "52", nombre: "shoes blanco", foto: this.imgPath + "skateboards-1150036_1920.jpg", categoria: ["ropa"] },
    { id: "53", nombre: "strawberry", foto: this.imgPath + "strawberry-2960533_1920.jpg", categoria: ["fruta", "postres"] },
    { id: "54", nombre: "reloj", foto: this.imgPath + "time-3222267_1920.jpg", categoria: ["otros"] },
    { id: "55", nombre: "toast", foto: this.imgPath + "toast-1077984_1920.jpg", categoria: ["comidaprincipal"] },
    { id: "56", nombre: "zapatos adidas", foto: this.imgPath + "zapatos-adidas-min.jpg", categoria: ["ropa", "masvendidos"] },
    { id: "57", nombre: "zapatos nike", foto: this.imgPath + "zapatos-nike-min.jpg", categoria: ["ropa", "masvendidos"] },
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
    // //borrar en favoritos
    // this.enFavoritos = await this.storage.get('favoritos')
    // this.enFavoritos = this.enFavoritos.filter(p => p.id !== productId);
    // this.storage.set('favoritos', this.enFavoritos);
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
