import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ScheduleModel } from './schedule.component.model';
import { ScheduleService } from 'src/app/Services/schedule.service';
import { AirlineServiceService } from 'src/app/Services/airline-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  formValue !: FormGroup;
  scheduleDetails !: any;
  airlineDetails: any;

  selectedLevel: any;
  data:Array<Object> = [
      {id: 0, name: "name1"},
      {id: 1, name: "name2"}
  ];

  selected(){
    console.log(this.selectedLevel)
  }


  scheduleModelObj : ScheduleModel = new ScheduleModel();
  constructor(
    private formBuilder: FormBuilder, 
    private _scheduleData: ScheduleService,
    private _airlineData: AirlineServiceService) 
  { 
      
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group(
      {
        FlightNo :[''],
        AirlineId:[''],
        PlaceFrom :[''],
        PlaceTo :[''],
        StartDateTime:new Date(),
        EndDateTime:new Date(),
        TicketPrice:[''],
        Rows:[''],
        Meal:[''],
        ScheduleDays:[''],
        InstrumentUsed:[''],
        BusinessClassSeats:[''],
        NonBusinessClassSeats:[''],
        
      })
      this.fetchAirlines();
      this.GetAllSchedule();
      
  }

  fetchAirlines(){
    this._airlineData.getAllAirlines().subscribe(
      data => {
        this.airlineDetails = data; 
        console.log('>>',this.airlineDetails)
    });
  }

  onChangeAirline(e: any){
    console.log(e.target.value);
    this.formValue.patchValue({
      AirlineId: Number(e.target.value)
    });
  }

  AddSchedule(){

    this.scheduleModelObj.FlightNo= this.formValue.value.FlightNo;
    this.scheduleModelObj.AirlineId = this.formValue.value.AirlineId;
    this.scheduleModelObj.PlaceFrom= this.formValue.value.PlaceFrom;
    this.scheduleModelObj.PlaceTo= this.formValue.value.PlaceTo;
    this.scheduleModelObj.StartDateTime=this.formValue.value.StartDateTime;
    this.scheduleModelObj.EndDateTime=this.formValue.value.EndDateTime;
    this.scheduleModelObj.TicketPrice= this.formValue.value.TicketPrice;
    this.scheduleModelObj.Rows= this.formValue.value.Rows;
    this.scheduleModelObj.Meal= this.formValue.value.Meal;
    this.scheduleModelObj.ScheduleDays = this.formValue.value.ScheduleDays;
    this.scheduleModelObj.InstrumentUsed = this.formValue.value.InstrumentUsed;
    this.scheduleModelObj.BusinessClassSeats = this.formValue.value.BusinessClassSeats;
    this.scheduleModelObj.NonBusinessClassSeats = this.formValue.value.NonBusinessClassSeats;


    this._scheduleData.addSchedule(this.scheduleModelObj).subscribe
    ((result) => {
     Swal.fire('Thank you...', 'Schedule submitted succesfully!', 'success')  
     console.log(this.scheduleModelObj);
      this.GetAllSchedule();
    });
  }

  GetAllSchedule(){

    this._scheduleData.getAllSchedule().subscribe(
      data => {this.scheduleDetails = data , console.log(this.scheduleDetails)});

  }
  DeleteSchedule(sch : any){
    this._scheduleData.deleteSchedule(sch.flightId).subscribe(
      data => {
      Swal.fire('Thank you...', 'Schedule deleted succesfully!', 'success');
      this.GetAllSchedule();
    }
    )

  }

}