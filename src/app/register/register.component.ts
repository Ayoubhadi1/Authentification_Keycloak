import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {form: any = {};
isSuccessful = false;
isSignUpFailed = false;
errorMessage = '';

constructor(private authService: AuthService) { }

ngOnInit() {
}

onSubmit() {
  /*this.authService.register(this.form).subscribe(
    data => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      alert("inscription effectuée");
    },
    err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    }
  );*/
  console.log(this.form.username);
}

}
