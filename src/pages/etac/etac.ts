import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WietacPage } from '../wietac/wietac';
import { AoetacPage } from '../aoetac/aoetac';
import { AfsoetacPage } from '../afsoetac/afsoetac';
import { EtaccPage } from '../etacc/etacc';
import { EtacoPage } from '../etaco/etaco';
import { BemPage } from '../bem/bem';
/**
 * Generated class for the EtacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etac',
  templateUrl: 'etac.html',
})
export class EtacPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtacPage');
  }

  wietac(){
    this.navCtrl.push(WietacPage);
  }
  aoetac(){
    this.navCtrl.push(AoetacPage);
  }
  afsoetac(){
    this.navCtrl.push(AfsoetacPage);
  }
  etacc(){
    this.navCtrl.push(EtaccPage);
  }
  etaco(){
    this.navCtrl.push(EtacoPage);
  }
  bem(){
    this.navCtrl.push(BemPage);
  }

}
