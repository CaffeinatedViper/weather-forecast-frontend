import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {WeatherData} from "./models/WeatherData";
import { faSun, faCloudRain, faCloud, faSnowflake, faSmog } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://weather-forecast-backend-o5sf.onrender.com/weather';


  constructor(private http: HttpClient) { }

  getWeather(latitude:number, longitude:number): Observable<WeatherData>
  {
    return this.http.get<WeatherData>(`${this.apiUrl}?latitude=${latitude}&longitude=${longitude}`)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      const errorMessages = Object.entries(error.error).map(([key, value]) => `${value}`).join('\n');
      alert(`${errorMessages}`);
    }
    return throwError('Error! Please try again later.');
  }

}
