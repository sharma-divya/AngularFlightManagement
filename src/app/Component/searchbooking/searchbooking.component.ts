import { Component, Input, OnInit } from '@angular/core';
import { SearchbookingserviceService } from 'src/app/Services/searchbookingservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { InteractionService } from 'src/app/Services/interaction.service';

@Component({
  selector: 'app-searchbooking',
  templateUrl: './searchbooking.component.html',
  styleUrls: ['./searchbooking.component.css']
})
export class SearchbookingComponent implements OnInit {
  
  scheduleDetails : any
  constructor(private _searchData: SearchbookingserviceService,
    private _interact : InteractionService,
    private formbuilder : FormBuilder, 
    private router : Router ) { }
    search : FormGroup = this.formbuilder.group({
      placefrom : new FormControl('',[
        Validators.required
      ]),
      placeto : new FormControl('',[
        Validators.required
      ])
    })
  ngOnInit(): void {
      
   
  }
  SearchSchedule(){
    console.log(this.search.value);
    if(this.search.invalid){
      Swal.fire('', 'Please enter From and To Place !', 'warning')       
      return;
    }
    this._searchData.SearchSchedule(this.search.value.placefrom,this.search.value.placeto).subscribe(
      data => {
       
        this.scheduleDetails = data , console.log(this.scheduleDetails)
        if(this.scheduleDetails.length == 0){
          Swal.fire('', 'No Flights available!', 'info')  
        }
      });

  }
  Book(sch : any){
   this._interact.sendmessage(sch);
   this.router.navigate(["managebooking"]);
  }
}
