import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { IPlanet } from '../planet';
import { IVehicle } from '../vehicle';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  constructor(private _planets: PlanetService) { }
  planets:  IPlanet[];
  vehicles: IVehicle[];
  selectedRadio;
  planetsSec = []; VehiclesSecond = [];
  planetsThr = []; VehiclesThird = [];
  planetsLast = []; VehiclesLast = [];
  _selectedObj = 'Choose one';_selectedObj2 = 'Choose one';_selectedObj3 = 'Choose one';_selectedObj4 = 'Choose one';
  ngOnInit() {
      this._planets.getPlanets()
      .subscribe(data => this.planets = data);

      this._planets.getVehicles()
      .subscribe(data => this.vehicles = data);
  }

  RemoveSelected(value, index){
    console.log(value);
    if(index == 1)
      this.planetsSec = this.planets.filter(item=> item.name != value.name)
    else if(index == 2)
      this.planetsThr = this.planetsSec.filter(item=> item.name != value.name)
    else if(index == 3)
      this.planetsLast = this.planetsThr.filter(item=> item.name != value.name)
  }

  ReduceVehicle(vehicle: IVehicle, group,  index){
    console.log( group);
    if(group == 1){
      this.vehicles[index].total_no -= 1;
      this.VehiclesSecond = this.vehicles;
    }
    else if(group == 2){
      this.VehiclesSecond[index].total_no -= 1;
      this.VehiclesThird = this.VehiclesSecond;
    }
    else if(group == 3){
      this.VehiclesThird[index].total_no -= 1;
      this.VehiclesLast = this.VehiclesThird;
    }
  }
}
