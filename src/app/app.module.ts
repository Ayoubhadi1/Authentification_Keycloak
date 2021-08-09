import { KeycloakSecurityService } from './service/keycloak-security.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {
  OKTA_CONFIG,
  OktaAuthModule
} from '@okta/okta-angular';
import { WelcomeComponent } from './welcome/welcome.component';

export function kcFactory(kcSecurity:KeycloakSecurityService){
  return ()=> kcSecurity.init();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide : APP_INITIALIZER , deps : [KeycloakSecurityService] , useFactory : kcFactory , multi:true} ,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
