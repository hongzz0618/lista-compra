import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewProductFormComponent
  ],
  exports: [
    NewProductFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
