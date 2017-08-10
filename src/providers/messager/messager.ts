import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import{AlertController} from 'ionic-angular';
/*
  Generated class for the MessagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MessagerProvider {

  constructor(public http: Http,
  public alertCtrl:AlertController) {
    //console.log('Hello MessagerProvider Provider');    
  }
 openShare() :void{
     console.log("button clicked");} 
}
