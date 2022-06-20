
import { Component, OnInit ,Input } from '@angular/core';
import { InteractionService } from 'src/app/Services/interaction.service';
import { FormGroup, FormBuilder, FormControl ,Validators} from '@angular/forms';
import { BookingModel } from './managebooking.component.model';
import { SearchbookingserviceService } from 'src/app/Services/searchbookingservice.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.component.html',
  styleUrls: ['./managebooking.component.css']
})
export class ManagebookingComponent implements OnInit {
  public fieldArray: Array<any> = [];
  public new: any = {};
  public flightdetails : any=[];
  bindflightno : string ='';
  bindflightname : string ='';
  bindairline : string ='';
  bindplaceto : string ='';
  bindplacefrom : string ='';
  public ticketdetails: any = {};
  retrievedObject :any 
  parsedObject :any
  constructor(private _interact : InteractionService,private formBuilder: FormBuilder ,
   private _search : SearchbookingserviceService , private router : Router ) { }
   booking : FormGroup = this.formBuilder.group({
    name : new FormControl('',[
      Validators.required
    ]),
    email : new FormControl('',[
      Validators.required
    ]),
    NoofSeats : new FormControl(),
    Id : new FormControl(''),
    PassengerDetails :  new FormControl(''),
    flightId :  new FormControl(''),
    PNR :  new FormControl()
  })
  ngOnInit(): void {
    this.retrievedObject = localStorage.getItem('UserInfo');
    this.parsedObject = JSON.parse(this.retrievedObject);
     this._interact.msgtosend.subscribe(
     data => this.flightdetails = data  
    
    );
    

    console.log(this.flightdetails);
    this.bindflightno = this.flightdetails.flightNo
    this.bindflightname = this.flightdetails.flightId
    this.bindairline = this.flightdetails.airlineName
    this.bindplacefrom = this.flightdetails.placeFrom
    this.bindplaceto = this.flightdetails.placeTo
  
     }
  
    
    addFieldValue() {
      this.fieldArray.push(this.new)
      this.new = {};
  }

  deleteFieldValue(index:any) {
      this.fieldArray.splice(index, 1);
  }
  AddBooking(){
    this.booking.value.Id = this.parsedObject.id;
    this.booking.value.PassengerDetails = this.fieldArray;
    this.booking.value.flightId = parseInt(this.bindflightname) ;
    console.log(this.booking.value);  
     this._search.AddBooking(this.booking.value).subscribe((result)=>{
      console.warn(result)
      Swal.fire('Congrats!', 'Your Flight is booked! Check your details with PNR '+ result, 'success')   
      this.router.navigate(["viewbookingpnr"]);

    })
  }
  }


