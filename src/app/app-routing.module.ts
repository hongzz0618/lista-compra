import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo: 'lista-compra', pathMatch: 'full' },
//   {
//     path: 'lista-compra',
//     children: [
//       {
//         path: "",
//         loadChildren: () => import('./lista-compra/lista-compra.module').then(m => m.ListaCompraPageModule)
//       },
//       {
//         path: ":productId",
//         loadChildren: () => import('./lista-compra/product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
//       }
//     ]
//   },
// ];

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
