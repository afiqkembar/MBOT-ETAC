import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MbotPage } from '../mbot/mbot';
import { EtacPage } from '../etac/etac';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  mbot(){
    this.navCtrl.push(MbotPage);
  }

  etac(){
    this.navCtrl.push(EtacPage);
  }


}
