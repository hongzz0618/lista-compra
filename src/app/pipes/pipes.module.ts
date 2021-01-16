import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleSlidePipe } from './double-slide.pipe';
import { TripleSlidePipe } from './triple-slide.pipe';



@NgModule({
  declarations: [DoubleSlidePipe, TripleSlidePipe],
  exports: [DoubleSlidePipe,TripleSlidePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
