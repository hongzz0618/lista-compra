import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Producto } from '../interfaces/producto.model';


@Injectable({
  providedIn: 'root'
})
export class DataLocalFavoritosService {

  productos: Producto[] = [];
  favoritoChanged = new EventEmitter<Producto[]>();


  constructor(private storage: Storage,
    public toastController: ToastController) {

    this.cargarFavoritos();

  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }


  guardarFavorito(product: Producto) {

    const existe = this.productos.find(p => p.id === product.id);
    if (!existe) {
      this.productos.unshift(product);
      this.storage.set('favoritos', this.productos);
      this.presentToast('Agregado a favorito');
    } else {
      this.presentToast('ya fue añadido');
    }
  }

  async cargarFavoritos() {

    const favoritos = await this.storage.get('favoritos');
    if (favoritos) {
      this.productos = favoritos;
      this.favoritoChanged.emit(this.productos.slice())
    }
    return this.productos
  }

  borrarProductFavorito(product: Producto) {

    this.productos = this.productos.filter(p => p.id !== product.id);
    this.storage.set('favoritos', this.productos);
    this.presentToast('Borrado de favoritos');
  }

}
