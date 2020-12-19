import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCompraPageRoutingModule } from './lista-compra-routing.module';

import { ListaCompraPage } from './lista-compra.page';
import { ListaCompraItemsComponent } from './lista-compra-items/lista-compra-items.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCompraPageRoutingModule
  ],
  declarations: [ListaCompraPage,ListaCompraItemsComponent]
})
export class ListaCompraPageModule {}
