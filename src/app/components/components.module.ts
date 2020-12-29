import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductListItemsComponent } from './product-list-items/product-list-items.component';
import { TopSliderComponent } from './top-slider/top-slider.component';

@NgModule({
  declarations: [
    NewProductFormComponent,
    ProductListItemsComponent,
    TopSliderComponent
  ],
  exports: [
    NewProductFormComponent,
    ProductListItemsComponent,
    TopSliderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
