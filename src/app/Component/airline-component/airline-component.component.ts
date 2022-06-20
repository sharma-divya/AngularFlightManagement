import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AirlineModel } from './airline-component.component.module';
import { AirlineServiceService } from '../../Services/airline-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-airline-component',
  templateUrl: './airline-component.component.html',
  styleUrls: ['./airline-component.component.css']
})
export class AirlineComponentComponent implements OnInit {
  formValue !: FormGroup;
  airlineDetails !: any;
  airlineModelObj : AirlineModel = new AirlineModel();

  constructor(private formBuilder : FormBuilder, private AirlineData : AirlineServiceService) {
  
   }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group(
      {
        AirlineName :[''],
        ContactNumber :[''],
        ContactAddress :[''],
        DiscountCode:[''],
        DiscountAmount:[''],
        Logo:['']
      })
      this.getAllAirline();
  }
  getAllAirline(){

    this.AirlineData.getAllAirlines().subscribe(
      data => {
        this.airlineDetails = data; 
        console.log('>>',this.airlineDetails)
    });

  }
  saveAirline(){
    this.airlineModelObj.AirlineName= this.formValue.value.AirlineName;
    this.airlineModelObj.ContactNumber= this.formValue.value.ContactNumber;
    this.airlineModelObj.ContactAddress= this.formValue.value.ContactAddress;
    this.airlineModelObj.DiscountCode= this.formValue.value.DiscountCode;
    this.airlineModelObj.DiscountAmount= this.formValue.value.DiscountAmount;
    this.airlineModelObj.Logo= this.formValue.value.Logo;

    this.AirlineData.saveAirline(this.airlineModelObj).subscribe
    ((result) =>{
      Swal.fire('Thank you...', 'Airline submitted succesfully!', 'success')  
      this.getAllAirline();
    });

  }

 
  blockAirline(row: any){
    this.AirlineData.deleteAirline(row.airlineId).subscribe(
      data => {
      Swal.fire('Thank you...', 'Airline deleted succesfully!', 'success')  
      this.getAllAirline();
    }
    )

  }
}
   
  

