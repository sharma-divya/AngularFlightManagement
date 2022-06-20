export class ScheduleModel{  
    FlightNo : string ='';
    AirlineId:number = 0;
    PlaceFrom :string ='';
    PlaceTo :string ='';
    StartDateTime = new Date();
    EndDateTime =new Date();
    TicketPrice:number = 0;
    Rows:number = 0;
    Meal: string ='';
    ScheduleDays:string ='';
    InstrumentUsed:string ='';
    BusinessClassSeats:number = 0;
    NonBusinessClassSeats:number = 0;
}