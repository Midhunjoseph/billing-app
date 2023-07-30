import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from './../../commonServices/common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUp: FormGroup = new FormGroup({});


  constructor(
    private formBuilder: FormBuilder,
    private CommonService: CommonService,
    //private apiService: ApiService
  ) { }

  ngOnInit() {
    this.signUp = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signUp.valid) {


    const formData = {
      username: this.signUp.value.username,
      email: this.signUp.value.email,
      password: this.signUp.value.password
    };
console.log("1",formData)
    this.CommonService.signup(formData).subscribe(
      result => {
        console.log(result);

    },
    (error: HttpErrorResponse) => {
      console.log(error.error); // Log the error response
      console.log(error.status); // Log the HTTP status code
      // Handle error, e.g., display an error message
    }
    )
    }
  }
}
