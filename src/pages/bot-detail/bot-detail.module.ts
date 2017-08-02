import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BotDetailPage } from './bot-detail';

@NgModule({
  declarations: [
    BotDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BotDetailPage),
  ],
})
export class BotDetailPageModule {}
