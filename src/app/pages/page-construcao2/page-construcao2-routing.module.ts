import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageConstrucao2Page } from './page-construcao2.page';

const routes: Routes = [
  {
    path: '',
    component: PageConstrucao2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageConstrucao2PageRoutingModule {}
