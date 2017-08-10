import { Component } from '@angular/core';
import { NavController,
     IonicPage,
     Platform} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

private myData:any
  //public navParams: NavParams
  constructor(
    private navCtrl: NavController, 
     ) {
  }

onSubmit(formData){
  if(formData.valid){
    console.log(formData.value);
    this.myData= formData.value;
  }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
