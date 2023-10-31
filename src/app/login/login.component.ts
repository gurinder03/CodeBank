import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../controller/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public auth: AuthService
   ){
    this.formData()
  }

  
  ngOnInit(): void {
  }

  formData(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    debugger
    this.loginForm.markAllAsTouched();
    console.log('Login ', this.loginForm);
    if (this.loginForm.valid) {
    } else {
      console.log('Form is not valid');
    }
  }

}
