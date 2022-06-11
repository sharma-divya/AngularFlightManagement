import { Component, OnInit } from '@angular/core';
import { AirlineServiceService } from '../../Services/airline-service.service';

@Component({
  selector: 'app-airline-component',
  templateUrl: './airline-component.component.html',
  styleUrls: ['./airline-component.component.css']
})
export class AirlineComponentComponent implements OnInit {
  airlines:any
  constructor(private AirlineData : AirlineServiceService) {
    this.AirlineData.getAllAirlines().subscribe((result)=>{
      this.airlines =result
      console.warn(result)
    })
   }

  ngOnInit(): void {
  }
  
  SaveAirline(data:any){
    this.AirlineData.saveAirline(data).subscribe((result)=>{
      console.warn(result)
    })
  }
  
   
  
}
