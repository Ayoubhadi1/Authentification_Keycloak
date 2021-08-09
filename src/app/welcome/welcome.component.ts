import { AuthService } from './../service/auth.service';
import { TokenStorageService } from './../service/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private tokenStorage : TokenStorageService , private authService : AuthService) { }
  user : any ;
  name!: string;
  roles: string[] = [];

  ngOnInit(): void {
    this.user = this.authService.decodeToken(this.tokenStorage.getToken())
    console.log(this.user) 
    this.name = this.user?.given_name ;
    this.roles = this.user?.realm_access.roles;
  }



}
