import { TokenStorageService } from './service/token-storage.service';
import { KeycloakSecurityService } from './service/keycloak-security.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projetFrontWorldAudit2';

  private roles!: string[];
  isLoggedIn = false;
  username!: string | undefined;
  currentUser! : any;
  isUser!: boolean;

  constructor(public kcService : KeycloakSecurityService , private tokenStorageService: TokenStorageService ){}
  async ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    this.currentUser = this.tokenStorageService.getUser();
    

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

     
      //console.log(this.tokenStorageService.getToken())
      this.username = user.username;
      
    }
    if (this.currentUser) {
      //this.isUser = this.currentUser.roles.includes('ROLE_USER');
    }

    
  }

  onLogout(){
    this.kcService.kc.logout();
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
