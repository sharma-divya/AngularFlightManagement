import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AirlineServiceService {
baseUrl ="http://localhost:9050/"
posturl = "AddAirline"
geturl = "GetAirlines"
loginurl = ""
  constructor(private http: HttpClient) { }
  getAllAirlines(){
    return this.http.get(this.baseUrl+ this.geturl)
  }
  saveAirline(data:any){
    return this.http.post(this.baseUrl+this.posturl,data)
  }

}
