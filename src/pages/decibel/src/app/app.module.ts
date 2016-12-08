import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { decibelPage } from '../pages/decibel/decibelPage';
import { welcomePage } from '../pages/welcome/welcomePage';

@NgModule({
  declarations: [
    MyApp,
    welcomePage,
    decibelPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    welcomePage,
    decibelPage
  ],
  providers: []
})
export class AppModule {}
