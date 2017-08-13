import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  @Input('sensorModel') sensorModel: SensorModel;

  constructor() { }

  ngOnInit() {
  }

}
