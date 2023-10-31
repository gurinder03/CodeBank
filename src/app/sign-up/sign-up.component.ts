import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signForm!: FormGroup;

  constructor(
    public fb: FormBuilder
  ){
    this.formData()
  }

  ngOnInit(): void {
      
  }

  formData(){
    this.signForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    debugger
    this.signForm.markAllAsTouched();
    console.log('Login ', this.signForm);
    if (this.signForm.valid) {
    } else {
      console.log('Form is not valid');
    }
  }
}
