import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleSlidePipe } from './double-slide.pipe';



@NgModule({
  declarations: [DoubleSlidePipe],
  exports: [DoubleSlidePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
