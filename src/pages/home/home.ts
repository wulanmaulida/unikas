
import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import{ BarcodeScanPage} from '../barcode-scan/barcode-scan';
import { CameraProvider } from '../../providers/util/camera.provider';
import {
Platform, ActionSheetController, LoadingController, ToastController
} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {TambahsaldoPage} from '../tambahsaldo/tambahsaldo';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  userDetails : any;
  responseData: any;
  dataSet : any;
  loading:any;
  //isLoggedIn: boolean=false;
  //placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;

userPostData = {"UserId":""};

  constructor(public app: App,
    public navCtrl: NavController,
    public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider,
    public navParams: NavParams,
    public platform: Platform,
    public loadingCtrl: LoadingController,
     public authService: AuthServiceProvider, 
    private toastCtrl: ToastController,
    ) {
  const data = JSON.parse(localStorage.getItem('userData'));
  this.userDetails = data.userData;

  //this.userPostData.user_id = this.userDetails.user_id;
  //this.userPostData.token = this.userDetails.token;

  }
backToWelcome(){
   const root = this.app.getRootNav();
   root.popToRoot();
}

dologout(){
     localStorage.clear();
     setTimeout(() => this.backToWelcome(), 1000);
}
Barcodescan(){
  this.navCtrl.push(BarcodeScanPage);
}
TambahSaldo(){
  this.navCtrl.push(TambahsaldoPage);
}

//untuk ganti foto profile

  changePicture() {

    const actionsheet = this.actionsheetCtrl.create({
      title: 'upload picture',
      buttons: [
        {
          text: 'camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getPicture();
          }
        },
        {
          text: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionsheet.present();
  }

  takePicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  getPicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  logout() {
    this.authService.logout().then((result) => {
      this.loading.dismiss();
      let nav = this.app.getRootNav();
      nav.setRoot(LoginPage);
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



}

