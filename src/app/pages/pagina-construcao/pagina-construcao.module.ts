import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaConstrucaoPageRoutingModule } from './pagina-construcao-routing.module';

import { PaginaConstrucaoPage } from './pagina-construcao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaConstrucaoPageRoutingModule
  ],
  declarations: [PaginaConstrucaoPage]
})
export class PaginaConstrucaoPageModule {}
