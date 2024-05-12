import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoordinatesService {
  private coordinatesSource = new BehaviorSubject<{ lat: number, lng: number }>({ lat: 50.04910829743716, lng: 19.9664856980756 })
  currentCoordinates = this.coordinatesSource.asObservable();

  constructor() { }

  updateCoordinates(lat: number, lng: number): void {
    this.coordinatesSource.next({ lat, lng });
  }
}
