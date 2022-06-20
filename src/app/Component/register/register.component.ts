import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/Services/loginservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _loginservice : LoginserviceService,
    private formbuilder : FormBuilder, 
    private router : Router ) { }
    userCredentials : FormGroup = this.formbuilder.group({
    username : new FormControl('',[
      Validators.required
    ]),
    password : new FormControl('',[
      Validators.required
    ]),
    name: new FormControl('', [
      Validators.required
    ]),
    role: new FormControl('user', [
      Validators.required
    ])
  })

  ngOnInit(): void {
  }
  ValidateUser(){
    console.log('>>>');
    console.log(this.userCredentials.value);
    if(this.userCredentials.invalid){
      alert('Please fill all the fields to register');
      return;
    }
    this._loginservice.Register(this.userCredentials.value).subscribe((result) =>{
      console.log(result);
      alert('Successfully Registered');
      this.userCredentials.reset();
    }),
     (error : any ) =>{
      console.error('>>>>>>>>',error);
      this.router.navigate(["register"]);
      
     }
  }

}
