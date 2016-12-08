import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DBMeter } from 'ionic-native';

@Component({
  selector: 'page-decibelPage',
  templateUrl: 'decibelPage.html'
})
export class decibelPage {
  dbErtek;
  dbSzam;
  dbDB;
  dbMin;
  dbMax;
  subscription;
  errMessage;
  constructor(public navCtrl: NavController) {
    this.errMessage = "";
    this.dbSzam = 0;
    this.dbDB = 0;
    this.dbMin = 0;
    this.dbMax = 0;
  }
  startMeres(){
    
    this.subscription = DBMeter.start().subscribe(
    data => this.dbErtek
    );
    this.dbSzam = this.dbErtek.length;
    this.dbDB = this.dbAVG(this.dbErtek);
    this.dbMax =  Math.max.apply(null,this.dbErtek);
    this.dbMin =  Math.min.apply(null,this.dbErtek);

  }
  dbAVG(array){
    var sum = 0;
    for( var i = 0; i < array.length; i++ ){
        sum += parseInt( array[i], 10 ); 
    }
    sum = sum /array.length;
    return sum;
  }
  checkMeter(){
    DBMeter.isListening().then(
    (isListening: boolean) => console.log(isListening)
    );
  }
  stopMeter(){
    this.subscription.unsubscribe();
    DBMeter.delete().then(
    () => this.errMessage = "Deleted DB Meter instance",
    error => this.errMessage = "Error occurred while deleting DB Meter instance"
    );
    this.dbSzam = 0;
    this.dbErtek = 0;
  }
}