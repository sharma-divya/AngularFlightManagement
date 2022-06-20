import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,RoutingComponents } from './app-routing.module';
import { AppComponent  } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './Services/auth-guard.service';
import { HttpInterceptorService } from './Services/http-interceptor.service';
import { ErrorInterceptorService } from './Services/error-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AuthGuardService,
  {
      provide : HTTP_INTERCEPTORS,useClass :HttpInterceptorService,multi:true
  },
  {
    provide : HTTP_INTERCEPTORS,useClass :ErrorInterceptorService,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
