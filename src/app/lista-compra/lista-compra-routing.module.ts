import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCompraPage } from './lista-compra.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCompraPage
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCompraPageRoutingModule {}
