import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  submitted = false;
  constructor() { }
  feedbackForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(9)]),
    name: new FormControl('', [Validators.required]),
    comments: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
  }
  // convenience getter for easy access to form fields
  get name() { return this.feedbackForm.get('name'); }
  get email() { return this.feedbackForm.get('email'); }
  get mobile() { return this.feedbackForm.get('mobile'); }
  get comments() { return this.feedbackForm.get('comments'); }

  Submit() {
    console.log(this.feedbackForm.value);
    this.submitted = true;
    if (this.feedbackForm.valid) {
      localStorage.setItem('feedback', JSON.stringify(this.feedbackForm.value));
      this.feedbackForm.reset(this.feedbackForm.value);
      console.log('fbsubmitted')
    }
  };
}
