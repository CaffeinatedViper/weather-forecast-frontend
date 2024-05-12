import {AfterViewInit, Component, EventEmitter, OnInit, Output, signal} from '@angular/core';
import * as L from 'leaflet';
import {CoordinatesService} from "../coordinates.service";

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrl: './location-picker.component.css'
})
export class LocationPickerComponent implements AfterViewInit   {
  private map: L.Map | undefined;
  private marker: L.Marker | undefined;
  latitude: number = 50.04910829743716;
  longitude: number = 19.9664856980756;
  private initMap(): void {
    this.map = L.map('map', {
      center: [50.04910829743716,19.9664856980756],
      zoom: 15,
      maxBounds: [
        [-90, -180],
        [90, 180]
      ],
      maxBoundsViscosity: 1.0
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    this.map.on('click', this.onMapClick);
  }

  constructor(private coordService: CoordinatesService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.updateMarker(this.latitude, this.longitude);
  }

  private onMapClick = (e: L.LeafletMouseEvent): void => {
    const {lat, lng} = e.latlng;
    this.updateCoordinates(lat, lng);
  }
  private updateCoordinates(lat: number, lng: number): void {
    this.latitude = lat;
    this.longitude = lng;
    this.coordService.updateCoordinates(lat, lng);
    this.updateMarker(lat, lng);
  }

  private updateMarker(lat: number, lng: number): void {
    if (this.marker) {
      // @ts-ignore
      this.map.removeLayer(this.marker);
    }
    // @ts-ignore
    this.marker = L.marker([lat, lng], {draggable: true}).addTo(this.map);


    this.marker.on('dragend', () => {
      // @ts-ignore
      const position = this.marker.getLatLng();
      this.updateCoordinates(position.lat, position.lng);
    });
  }
  private centerMap(lat: number, lng: number): void {
    if (this.map) {
      this.map.setView(new L.LatLng(lat, lng), this.map.getZoom());
      this.updateMarker(lat, lng);
    }
  }
  onSubmit(): void {

    this.updateCoordinates(this.latitude, this.longitude);
    this.centerMap(this.latitude, this.longitude);
  }




}
