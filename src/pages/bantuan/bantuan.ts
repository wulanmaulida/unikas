import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MessagerProvider} from '../../providers/messager/messager';
import{Events} from 'ionic-angular'
/**
 * Generated class for the BantuanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-bantuan',
  templateUrl: 'bantuan.html',
})
export class BantuanPage {

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public messagerProvider: MessagerProvider) {

}
openShare() {
  this.messagerProvider.openShare();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BantuanPage');
  }

}
