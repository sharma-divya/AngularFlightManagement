import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http : HttpClient) { }
  
  addSchedule(data:any): Observable<any>{
    return this.http.post<any>("http://localhost:9050/flight/AddFlight",data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  getAllSchedule(){
      return this.http.get<any>("http://localhost:9050/flight/GetAllFlights")
      .pipe(map((res:any) =>{
        return res;
      }))
  }

  deleteSchedule(id:number){
    return this.http.delete<any>("http://localhost:9050/flight/DeleteFlight?id="+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }
}