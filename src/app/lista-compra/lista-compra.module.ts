import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCompraPageRoutingModule } from './lista-compra-routing.module';

import { ListaCompraPage } from './lista-compra.page';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCompraPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaCompraPage],
  exports: [
    ListaCompraPage
  ],
})
export class ListaCompraPageModule {}
