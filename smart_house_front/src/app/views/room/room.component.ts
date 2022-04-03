import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  devices: device = [
    { type: "AC", value: "20°C", image:"../../../assets/air-conditioner.png" },
    { type: "Door", value: "Locked", image:"../../../assets/door.png" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
type device = Array<{ type: string; value: string ; image: string}>;

