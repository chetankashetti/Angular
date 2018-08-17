import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPlanet } from './planet';
import { IVehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private _url: string = "https://findfalcone.herokuapp.com/planets";
  private _vehicleUrl: string = "https://findfalcone.herokuapp.com/vehicles";
  constructor(private http: HttpClient) { }

  getPlanets(): Observable<IPlanet[]>{
    return this.http.get<IPlanet[]>(this._url);
  }

  getVehicles(): Observable<IVehicle[]>{
    return this.http.get<IVehicle[]>(this._vehicleUrl);
  }
}
