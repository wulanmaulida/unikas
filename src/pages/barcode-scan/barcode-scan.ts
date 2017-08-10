import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import{TabsPage} from '../tabs/tabs';
@Component({
  selector: 'page-barcode-scan',
  templateUrl: 'barcode-scan.html',
})
export class BarcodeScanPage {

  public barcodeData;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl:AlertController,
     public barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScanPage');
  }
  
  scan() {
    const options = {
      preferFrontCamera: false, // iOS and Android
      showFlipCameraButton: true, // iOS and Android
      showTorchButton: true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      prompt: 'Place a barcode inside the scan area', // Android
        // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      resultDisplayDuration: 500,
      formats: 'QR_CODE,PDF_417', // default: all but PDF_417 and RSS_EXPANDED
        // Android only (portrait|landscape), default unset so it rotates with the device
      orientation: 'portrait',
      disableAnimations: true, // iOS
      disableSuccessBeep: false // iOS
    };
    
    this.barcodeScanner
            .scan(options)
            .then((data) => {
              this.barcodeData = data;
              const alert = this.alertCtrl.create({
                title: 'Scan Results',
                subTitle: data.text,
                buttons: ['OK']
              });
              alert.present();
            })
            .catch((err) => {
              const alert = this.alertCtrl.create({
                title: 'Attention!',
                subTitle: err,
                buttons: ['Close']
              });
              alert.present();
            });
  }
}
