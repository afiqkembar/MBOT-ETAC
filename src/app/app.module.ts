import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MbotPage } from '../pages/mbot/mbot';
import { EtacPage } from '../pages/etac/etac';
import { WimbotPage } from '../pages/wimbot/wimbot';
import { MbotbmPage } from '../pages/mbotbm/mbotbm';
import { FombotPage } from '../pages/fombot/fombot';
import { TtmbotPage } from '../pages/ttmbot/ttmbot';
import { WietacPage } from '../pages/wietac/wietac';
import { AoetacPage } from '../pages/aoetac/aoetac';
import { AfsoetacPage } from '../pages/afsoetac/afsoetac';
import { EtaccPage } from '../pages/etacc/etacc';
import { EtacoPage } from '../pages/etaco/etaco';
import { BemPage } from '../pages/bem/bem';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MbotPage,
    EtacPage,
    WimbotPage,
    MbotbmPage,
    FombotPage,
    TtmbotPage ,
    BemPage,
    WietacPage,
    EtaccPage,
    AfsoetacPage ,
    AoetacPage,
    EtacoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MbotPage,
    EtacPage,
    WimbotPage,
    MbotbmPage,
    FombotPage,
    TtmbotPage ,
    BemPage,
    WietacPage,
    EtaccPage,
    AfsoetacPage ,
    AoetacPage,
    EtacoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
