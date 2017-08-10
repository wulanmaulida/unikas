import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import{ Pipe} from '@angular/core';

import { MyApp } from './app.component';
import {MODULES, PROVIDERS} from './app.imports';

//import page
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HistoryPage } from '../pages/history/history';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ProfilePage} from '../pages/profile/profile';
import {LoginPage} from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';
import {BarcodeScanPage} from '../pages/barcode-scan/barcode-scan';
import {Profile2Page} from '../pages/profile2/profile2';
import {TambahsaldoPage} from '../pages/tambahsaldo/tambahsaldo';
import {UbahpinPage} from '../pages/ubahpin/ubahpin';
import {UbahPasswordPage} from '../pages/ubah-password/ubah-password';
import{SyaratKetentuanPage} from '../pages/syarat-ketentuan/syarat-ketentuan';
import {NobuIPage} from '../pages/nobu-i/nobu-i';
import {BantuanPage} from '../pages/bantuan/bantuan';
import{PengaturanPage} from '../pages/pengaturan/pengaturan';
import {MerchantPage} from '../pages/merchant/merchant';
import { MessagerProvider } from '../providers/messager/messager';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UserDataProvider } from '../providers/user-data/user-data';
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
  //  Directive,
    //ElementRef,
    //HostListener,
    HomePage,
    TabsPage,
    HistoryPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    BarcodeScanPage,
    Profile2Page,
    TambahsaldoPage,
    UbahpinPage,
    UbahPasswordPage,
    SyaratKetentuanPage,
    NobuIPage,
    BantuanPage,
    PengaturanPage,
    MerchantPage

  ],
  imports: [
    MODULES,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:"true",
      backButtonText:'',
    
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    HistoryPage,
   ProfilePage,
    LoginPage,
    SignupPage,
    BarcodeScanPage,
    Profile2Page,
    TambahsaldoPage,
    UbahpinPage,
    UbahPasswordPage,
    SyaratKetentuanPage,
    NobuIPage,
    BantuanPage,
    PengaturanPage,
    MerchantPage
    
  ],
  providers: [
    PROVIDERS, 
    {provide: ErrorHandler,useClass: IonicErrorHandler},
    MessagerProvider,
    AuthServiceProvider,
    UserDataProvider,
    
  ]
})
export class AppModule {}
