import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchbookingserviceService {

  constructor(private http : HttpClient) { }
  SearchSchedule(placefrom:string,placeto:string): Observable<any>{
    return this.http.get<any>("http://localhost:9050/flight/SearchFlights?placefrom=" + placefrom + "&placeto="+ placeto)
    .pipe(map((res:any) =>{
      return res;
    }))
  }
  AddBooking(data:any) {
    return this.http.post<any>("http://localhost:9050/flight/booking",data) 
  }
 GetBookingEmail(email:string): Observable<any>{
    return this.http.get<any>("http://localhost:9050/flight/booking/history?Email=" + email )
    .pipe(map((res:any) =>{
      return res;
    }))
  }
  GetBookingPNR(PNR:string): Observable<any>{
    return this.http.get<any>("http://localhost:9050/flight/ticket?PNR=" + PNR)
    .pipe(map((res:any) =>{
      return res;
    }))
  }
  deletebooking(id:number){
    return this.http.delete<any>("http://localhost:9050/flight/booking/cancel?id="+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }
}
