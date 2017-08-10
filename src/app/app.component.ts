import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NavController} from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import {ProfilePage} from '../pages/profile/profile';
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';
import {Profile2Page} from '../pages/profile2/profile2';
import{UbahpinPage} from '../pages/ubahpin/ubahpin';
import {UbahPasswordPage} from '../pages/ubah-password/ubah-password';
import {PengaturanPage} from '../pages/pengaturan/pengaturan';
import{SyaratKetentuanPage} from '../pages/syarat-ketentuan/syarat-ketentuan';
import {NobuIPage} from '../pages/nobu-i/nobu-i';
import {BantuanPage} from '../pages/bantuan/bantuan';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import{Events, MenuController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserDataProvider } from '../providers/user-data/user-data';
import { HttpModule } from '@angular/http';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public out;
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{
    title: string,
    component: any,
    active:boolean,
    icon:string,
    logsOut?: boolean;
  index?:number}>;
 

  constructor(
    public events: Events,
    public userData: UserDataProvider,
    public platform: Platform, 
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public authService: AuthServiceProvider,
    public storage: Storage,
   public http: HttpModule,
    ) {
  
    // Call any initial plugins when ready
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
/*
this.storage.get('token').then((val) => {
      var creds = JSON.stringify({jwtToken: val});
      this.http.post('http://dev.apps.unikas.co.id/services/v2/api/login', creds).subscribe((ret) => {
        this.out = ret.json();
        if(this.out.status){
          this.events.publish('user:login');
        }
      });
    });

*/
    this.pages = [
      { title: 'Home', component: HomePage, active:true, icon: 'home'  },
      { title: 'Profil', component: ProfilePage, active:true, index:1, icon: 'person'},
     { title: 'Ubah Kata Sandi', component: UbahPasswordPage, active:true, icon: 'lock'},
      { title: 'Ubah PIN', component: UbahpinPage, active:true, icon: 'camera'},
      { title: 'Syarat Dan Ketentuan', component: SyaratKetentuanPage, active:true, icon: 'alert'},
      { title: 'Nobu i-Banking', component: NobuIPage, active:true, icon: 'warning'},
      { title: 'Pengaturan', component: PengaturanPage, active:true, icon: 'settings'},
      { title: 'Bantuan', component: BantuanPage, active:true, icon: 'help-circle'},
      { title: 'Keluar', component: TabsPage, active:true, icon: 'log-out'},
    ];

 this.userData.cekLogin().then((isLogin) => {
      if(isLogin){
        this.rootPage=TabsPage;
      }
      else
        this.rootPage=LoginPage;
    });
 
    
  }
  

  /*
  goHome(){
    this.nav.push(TabsPage);
  }
  goProfil(){
    this.nav.push(ProfilePage);
  }
  goUbahPassword(){
    this.nav.push(UbahPasswordPage);
  } 
  goUbahPin(){
    this.nav.push(UbahpinPage);
  } 
  goSyarat(){
    this.nav.push(SyaratKetentuanPage);
  } 
  goNobuIPage(){
    this.nav.push(NobuIPage);
  } 
   goBantuan(){
    this.nav.push(BantuanPage);
  } 
  goPengaturan(){
    this.nav.push(PengaturanPage);
  } 
  */
 // goLogout(){
   // this.nav.push(BantuanPage);
  //} 

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
}

}
