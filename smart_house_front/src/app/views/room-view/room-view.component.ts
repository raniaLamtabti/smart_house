import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {
  constructor() {}

  name: string = '';
  value: string = '';


  devices: device = [
    { type: "AC", value: "20°C", image:"../../../assets/air-conditioner.png" },
    { type: "Door", value: "Locked", image:"../../../assets/door.png" }
  ];

  ngOnInit(): void {
  }
  addDevice()
  {
    console.log(this.name);
    console.log(this.value);
    this.devices.push({type: this.name, value: this.value, image:"../../../assets/air-conditioner.png" });
    console.log(this.devices);
  }
}
type device = Array<{ type: string; value: string ; image: string}>;

