import { Component, ViewChild } from '@angular/core';
import { Slides, NavParams, NavController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {ProfilePage} from '../profile/profile';
import{AuthServiceProvider} from'../../providers/auth-service/auth-service';
//import{Http} from'@angular/http';
import{UserDataProvider} from '../../providers/user-data/user-data';
import{SignupPage} from '../signup/signup';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 loading:any;
 //loginData:{nomorTlp?: string, password?:string}={};
// submitted = false;
loginData = { UserId:'', Password:'' };
responseData:any;
  data:any;
  regData = { UserId:'', Password:'' };


  userData = {"UserId": "","Password": ""};
  public loginForm: any;
  public backgroundImage = 'assets/img/background/biru.jpg';

  constructor(
    public navCtrl: NavController,
    public authService:AuthServiceProvider,
    private toastCtrl:ToastController,
   public loadingCtrl: LoadingController,) {}

  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  goToLogin() {
    this.slider.slideTo(1);}

  goToSignup() {
    //this.slider.slideTo(2);}
this.navCtrl.push(SignupPage);}
  slideNext() {
    this.innerSlider.slideNext();}

  slidePrevious() {
    this.innerSlider.slidePrev();}
  
//percobaan ke 3
/*
signup(){
     this.authService.postData(this.userData,'signup').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(TabsPage);
    }, (err) => {
      // Error log
       this.loading.dismiss();
    this.presentToast(err);
    });
  }
  presentToast(msg){
  let toast=this.toastCtrl.create({
    message:msg,
    duration:1000,
    position:'bottom',
    dismissOnPageChange:true
  });

  toast.onDidDismiss(()=>{
    console.log('Dismissed toast');
  });
  toast.present();
}
login(){
     this.authService.postData(this.userData,'signup').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(TabsPage);
    }, (err) => {
      // Error log
       this.loading.dismiss();
    this.presentToast(err);
    });
  }
*/
doLogin() {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      localStorage.setItem('token', this.data.access_token);
      this.navCtrl.setRoot(TabsPage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
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

  doSignup() {
    this.showLoader();
    this.authService.register(this.regData).then((result) => {
      this.loading.dismiss();
      this.navCtrl.pop();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

}
