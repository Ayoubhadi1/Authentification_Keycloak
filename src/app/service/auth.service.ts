import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

const AUTH_API = 'http://192.168.11.2:8080/auth/realms/testAyoub/protocol/openid-connect/token';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  login(credentials : any): Observable<any> {
    
    let body = new URLSearchParams();
    body.set('username', credentials.username);
    body.set('password', credentials.password);
    body.set('client_id', 'clientTest');
    body.set('grant_type', "password");

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
    
    return this.http.post(AUTH_API , body.toString(), options);
  }

  register(user : any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  public  decodeToken(myRawToken : string | null) : any{
    if(myRawToken){
      const decodedToken = this.helper.decodeToken(myRawToken);
      return decodedToken
    }
    return null
  }
}
