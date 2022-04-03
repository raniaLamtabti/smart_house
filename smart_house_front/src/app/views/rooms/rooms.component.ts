import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: room = [
    { name: "room 1", devices: "3"},
    { name: "room 2", devices: "4"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
type room = Array<{ name: string; devices: string}>
