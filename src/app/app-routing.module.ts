import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'lista-compra',
    loadChildren: () => import('./pages/lista-compra/lista-compra.module').then( m => m.ListaCompraPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'pagina-construcao',
    loadChildren: () => import('./pages/pagina-construcao/pagina-construcao.module').then( m => m.PaginaConstrucaoPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'page-construcao2',
    loadChildren: () => import('./pages/page-construcao2/page-construcao2.module').then( m => m.PageConstrucao2PageModule), canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
