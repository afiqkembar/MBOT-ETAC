import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WimbotPage } from '../wimbot/wimbot';
import { MbotbmPage } from '../mbotbm/mbotbm';
import { FombotPage } from '../fombot/fombot';
import { TtmbotPage } from '../ttmbot/ttmbot';

/**
 * Generated class for the MbotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mbot',
  templateUrl: 'mbot.html',
})
export class MbotPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MbotPage');
  }

  wimbot(){
    this.navCtrl.push(WimbotPage);
  }

  mbotbm(){
    this.navCtrl.push(MbotbmPage);
  }

  fombot(){
    this.navCtrl.push(FombotPage);
  }

  ttmbot(){
    this.navCtrl.push(TtmbotPage);
  }
}
