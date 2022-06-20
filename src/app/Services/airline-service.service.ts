import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AirlineServiceService {
  constructor(private http : HttpClient) { }
  
  saveAirline(data:any){
    return this.http.post<any>("http://localhost:9050/flight/airline/register",data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  getAllAirlines(){
      return this.http.get<any>("http://localhost:9050/flight/GetAirlines")
      .pipe(map((res:any) =>{
        return res;
      }))
  }

  deleteAirline(id:number){
    return this.http.delete<any>("http://localhost:9050/flight/BlockAirline?id="+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

}
// export class AirlineServiceService {
// baseUrl ="http://localhost:9050/"
// posturl = "AddAirline"
// geturl = "GetAirlines"
// loginurl = ""
//   constructor(private http: HttpClient) { }
//   getAllAirlines(){
//     return this.http.get(this.baseUrl+ this.geturl)
//   }
//   saveAirline(data:any){
//     return this.http.post(this.baseUrl+this.posturl,data)
//   }

// }
