import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HistoryPage} from '../history/history';
import{HomePage} from '../home/home';
import{ProfilePage} from '../profile/profile';
import{MerchantPage} from '../merchant/merchant';
import {LoginPage} from '../login/login';
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 // mySelectedIndex:number; 
   tab1Root: any = HomePage;
    tab2Root:any=MerchantPage;
    tab3Root: any = HistoryPage;
   
    selected: number;

  constructor(public navCtrl: NavController,
   public navParams: NavParams) {
   // this.mySelectedIndex = navParams.data.tabIndex || 0;
if(!localStorage.getItem("token")) {
      navCtrl.setRoot(LoginPage);
    }

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
