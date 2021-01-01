import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Producto } from '../interfaces/producto.model';


@Injectable({
  providedIn: 'root'
})
export class DataLocalListaCompraService {

  productos: Producto[] = [];
  listaCompraChanged = new EventEmitter<Producto[]>();


  constructor(private storage: Storage,
    public toastController: ToastController) {

    this.cargarlistaCompra();

  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }


  guardarlistaCompra(product: Producto) {

    const existe = this.productos.find(p => p.id === product.id);
    if (!existe) {
      this.productos.unshift(product);
      this.storage.set('listaCompra', this.productos);
      this.presentToast('Agregado a listaCompra');
    } else {
      this.presentToast('ya fue añadido');
    }
  }

  async cargarlistaCompra() {

    const listaCompra = await this.storage.get('listaCompra');
    if (listaCompra) {
      this.productos = listaCompra;
      this.listaCompraChanged.emit(this.productos.slice())
    }
    return this.productos
  }

  borrarProductlistaCompra(product: Producto) {

    this.productos = this.productos.filter(p => p.id !== product.id);
    this.storage.set('listaCompra', this.productos);
    this.presentToast('Borrado de listaCompra');
  }

}
