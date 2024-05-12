import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";
import {WeatherData} from "../models/WeatherData";
import { faSun, faCloudSun, faCloud, faSmog, faCloudRain, faIcicles, faCloudShowersHeavy, faCloudMeatball, faSnowflake, faBolt, faPooStorm } from '@fortawesome/free-solid-svg-icons';
import {CoordinatesService} from "../coordinates.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService, private coordService: CoordinatesService) {
    this.coordService.currentCoordinates.subscribe(coords => {
      this.weatherService.getWeather(coords.lat, coords.lng).subscribe({
        next: (data) => {
          this.weatherData = data;
          console.log(this.weatherData.daily);
        },
        error: (error) =>{
          console.error('There was an error!', error);
        }
      });
    });
  }
  ngOnInit(): void {

  }
  getWeatherIcon(code: number): any {
    switch (code) {
      case 0:
        return faSun;
      case 1:
      case 2:
      case 3:
        return code === 1 ? faCloudSun : faCloud;
      case 45:
      case 48:
        return faSmog;
      case 51:
      case 53:
      case 55:
        return faCloudRain;
      case 56:
      case 57:
        return faIcicles;
      case 61:
      case 63:
      case 65:
        return faCloudShowersHeavy;
      case 66:
      case 67:
        return faCloudMeatball;
      case 71:
      case 73:
      case 75:
        return faSnowflake;
      case 77:
        return faSnowflake;
      case 80:
      case 81:
      case 82:
        return faCloudShowersHeavy;
      case 85:
      case 86:
        return faCloudMeatball;
      case 95:
        return faBolt;
      case 96:
      case 99:
        return faPooStorm;
      default:
        return faSun;
    }
  }
}
