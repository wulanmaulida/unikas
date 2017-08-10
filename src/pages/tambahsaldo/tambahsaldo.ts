import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HistoryPage} from '../history/history';
import{HomePage} from '../home/home';
import{ProfilePage} from '../profile/profile';


@Component({
  selector: 'page-tambahsaldo',
  templateUrl: 'tambahsaldo.html',
})
export class TambahsaldoPage {
  
  
  constructor(public navCtrl: NavController,
   public navParams: NavParams) {
 


 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambahsaldoPage');
  }
  

}
