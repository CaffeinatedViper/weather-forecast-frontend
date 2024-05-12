import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoordinatesService {
  private coordinatesSource = new BehaviorSubject<{ lat: number, lng: number }>({ lat: 0, lng: 0 });
  currentCoordinates = this.coordinatesSource.asObservable();

  constructor() { }

  updateCoordinates(lat: number, lng: number): void {
    this.coordinatesSource.next({ lat, lng });
  }
}
