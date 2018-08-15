import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtacoPage } from './etaco';

@NgModule({
  declarations: [
    EtacoPage,
  ],
  imports: [
    IonicPageModule.forChild(EtacoPage),
  ],
})
export class EtacoPageModule {}
