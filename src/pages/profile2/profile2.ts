import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CameraProvider } from '../../providers/util/camera.provider';
import {
Platform, ActionSheetController, LoadingController, MenuController
} from 'ionic-angular';
import {BarcodeScanPage} from '../barcode-scan/barcode-scan';
import {TambahsaldoPage} from '../tambahsaldo/tambahsaldo';


@Component({
  selector: 'page-profile2',
  templateUrl: 'profile2.html',
})
export class Profile2Page {
  
  placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;
  
  constructor(
    public navCtrl: NavController,
    public actionsheetCtrl: ActionSheetController,
    public navParams: NavParams,
    public cameraProvider: CameraProvider,
    public platform: Platform,
    public loadingCtrl: LoadingController
    ) {
  }

  goToBarcodescan(){
  this.navCtrl.push(BarcodeScanPage);
}
tambahSaldo(){
  this.navCtrl.push(TambahsaldoPage);
}


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
}
