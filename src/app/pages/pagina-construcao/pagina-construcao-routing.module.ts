import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaConstrucaoPage } from './pagina-construcao.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaConstrucaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaConstrucaoPageRoutingModule {}
