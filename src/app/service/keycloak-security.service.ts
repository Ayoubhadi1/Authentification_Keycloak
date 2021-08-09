import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { KeycloakInstance } from 'keycloak-js';

declare var Keycloak : any ;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  public kc!: KeycloakInstance;
  constructor(private http : HttpClient ) { }

  public async init(){
    console.log("Security initialisation....");
    this.kc = new Keycloak({
      url : "http://192.168.11.2:8080/auth" , //http://192.168.11.2:8080/auth  //http://localhost:8080/auth
      realm : "testAyoub",                    //testAyoub                      //master
      clientId : "clientTest"               //clientTest                     //testAyoub
    });

    await this.kc.init({
      //onLoad : 'login-required',
      //onLoad : "check-sso",
      //promiseType : "native"
    });

    //console.log(this.kc)
  }
}
