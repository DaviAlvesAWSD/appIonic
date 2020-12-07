import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageConstrucao2PageRoutingModule } from './page-construcao2-routing.module';

import { PageConstrucao2Page } from './page-construcao2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageConstrucao2PageRoutingModule
  ],
  declarations: [PageConstrucao2Page]
})
export class PageConstrucao2PageModule {}
