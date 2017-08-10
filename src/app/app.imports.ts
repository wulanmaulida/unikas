//ionic native providers
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';
import { CameraProvider } from '../providers/util/camera.provider';
import { Geolocation } from '@ionic-native/geolocation';
import{MessagerProvider} from '../providers/messager/messager';
//ionic modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

export const MODULES = [
  //SwingModule,
  BrowserModule,
  HttpModule,
];

export const PROVIDERS = [
    CameraProvider,
    MessagerProvider,
    
  // Ionic native specific providers
  BarcodeScanner,
  Camera,
  Geolocation,
  GoogleMaps,
  StatusBar,
  SplashScreen
];

