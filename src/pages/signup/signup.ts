import { Component } from '@angular/core';
import {  NavController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  loading:any;
  responseData : any;
  userData = {"UserId": "","Password": ""};

  constructor(public navCtrl: NavController,public toastCtrl:ToastController,
   public authService:AuthServiceProvider ) {
  }

  signup(){
    if(this.userData.UserId && this.userData.Password){
     this.authService.postData(this.userData,'login').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(TabsPage);
    },(err)=>{
  
  });
    }  
    else{
      this. presentToast("Give valid details");
    } 
  }

    
presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  
}