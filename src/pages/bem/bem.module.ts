import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BemPage } from './bem';

@NgModule({
  declarations: [
    BemPage,
  ],
  imports: [
    IonicPageModule.forChild(BemPage),
  ],
})
export class BemPageModule {}
