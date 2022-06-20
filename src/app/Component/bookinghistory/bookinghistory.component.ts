import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,FormControl ,Validators} from '@angular/forms';
import { SearchbookingserviceService } from 'src/app/Services/searchbookingservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {

  formValue !: FormGroup;
  bookDetails !: any;
 

  constructor(
    private formBuilder: FormBuilder, 
    private _bookData: SearchbookingserviceService
   ) {}
   search : FormGroup = this.formBuilder.group({
    email : new FormControl('',[
      Validators.required
    ])
  })

  ngOnInit(): void {   
  }
  

  GetBookingEmail(){
    console.log(this.search.value);
    if(this.search.invalid){
      Swal.fire('', 'Please enter Email !', 'warning')       
      return;
    }
    this._bookData.GetBookingEmail(this.search.value.email).subscribe(
      data => {this.bookDetails = data , console.log(this.bookDetails)});

  }
  Cancel(sch : any){
    this._bookData.deletebooking(sch.bookingId).subscribe(
      data => {
      Swal.fire('', 'Booking deleted succesfully!', 'success');
      this.GetBookingEmail();
    }
    )

  }
}
