import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProductoPage } from './new-producto.page';

const routes: Routes = [
  {
    path: '',
    component: NewProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProductoPageRoutingModule {}
