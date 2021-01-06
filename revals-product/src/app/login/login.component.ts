import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //loginForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private fb: FormBuilder) { }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    Password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  ngOnInit(): void {

  }
  // convenience getter for easy access to form fields
  get u() { return this.loginForm.get('username'); }
  get p() { return this.loginForm.get('Password'); }

  Login() {

    console.log(this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.valid) {
      this.router.navigate(['/products']);
    }
  }
}
