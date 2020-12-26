import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewProductoPageRoutingModule } from './new-producto-routing.module';

import { NewProductoPage } from './new-producto.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewProductoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NewProductoPage]
})
export class NewProductoPageModule {}
