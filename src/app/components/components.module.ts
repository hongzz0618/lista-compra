import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductListItemsComponent } from './product-list-items/product-list-items.component';
import { TopSliderComponent } from './top-slider/top-slider.component';
import { DoubleSlidesComponent } from './double-slides/double-slides.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    NewProductFormComponent,
    ProductListItemsComponent,
    TopSliderComponent,
    DoubleSlidesComponent
  ],
  exports: [
    NewProductFormComponent,
    ProductListItemsComponent,
    TopSliderComponent,
    DoubleSlidesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
