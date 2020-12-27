import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductListItemsComponent } from './product-list-items/product-list-items.component';

@NgModule({
  declarations: [
    NewProductFormComponent,
    ProductListItemsComponent
  ],
  exports: [
    NewProductFormComponent,
    ProductListItemsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
