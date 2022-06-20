import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/Services/loginservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

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
    role: new FormControl('admin', [
      Validators.required
    ])
  })

  ngOnInit(): void {
  }
  ValidateUser(){
    console.log('>>>');
    console.log(this.userCredentials.value);
    if(this.userCredentials.invalid){
      return;
    }
    this._loginservice.validateUser(this.userCredentials.value).subscribe((result) =>{
      console.log(result);
      if(result.token){
        this.router.navigate(["manageairline"]);
      }
      else{
        alert(result.response);
      }
    }),
     (error : any ) =>{
      console.error('>>>>>>>>',error);
      this.router.navigate(["register"]);
      
     }

    //  this._loginservice.Login
  }

  
  // Login(data:any){
  //   this._loginservice.Login(data).subscribe((result)=>{
  //     console.warn(result)
  //   })
  // }
}
