import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Events } from 'ionic-angular';
import { Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDataProvider {
  HAS_LOGGED_IN = 'hasLoggedIn';
    public loginState = false;
    public token;

  constructor(public http: Http, 
  public events:Events,
  public storage: Storage
  )   {}

setToken(token) {
    this.storage.set('token', token);
  }

  setId(id) {
    this.storage.set('id', id);
  }

  login(nomorTlp) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    //this.storage.set('keterangan', keterangan);
    //this.setnomorTlp(nomorTlp);
    this.events.publish('user:login');
    this.loginState = true;
  }
   signup(nomorTlp) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setnomorTlp(nomorTlp);
    this.events.publish('user:signup');
  }

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('nomorTlp');
    this.storage.remove('token');
    this.storage.remove('id');
    //this.storage.remove('keterangan');
    this.events.publish('user:logout');
    this.loginState = false;
    // location.reload();
  }
setnomorTlp(nomorTlp) {
    this.storage.set('nomorTlp', nomorTlp);
  }
  cekLogin(){
    return this.storage.get('login').then((value)=>{
      return value===true;
    })
  }

}
