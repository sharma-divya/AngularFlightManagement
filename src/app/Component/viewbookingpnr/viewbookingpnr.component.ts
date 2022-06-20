import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,FormControl ,Validators} from '@angular/forms';
import { SearchbookingserviceService } from 'src/app/Services/searchbookingservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-viewbookingpnr',
  templateUrl: './viewbookingpnr.component.html',
  styleUrls: ['./viewbookingpnr.component.css']
})
export class ViewbookingpnrComponent implements OnInit {
  formValue !: FormGroup;
  bookDetails !: any;
 

  constructor(
    private formBuilder: FormBuilder, 
    private _bookData: SearchbookingserviceService
   ) {}
   search : FormGroup = this.formBuilder.group({
    PNR : new FormControl()
  })

  ngOnInit(): void {   
  }
  

  GetBookingPNR(){ 
    this._bookData.GetBookingPNR(this.search.value.PNR).subscribe(
      data => {this.bookDetails = data , console.log(this.bookDetails)});

  }

  
  
}
