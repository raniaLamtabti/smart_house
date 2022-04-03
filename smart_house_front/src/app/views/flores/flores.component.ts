import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.scss']
})
export class FloresComponent implements OnInit {
  flores: flore = [
    { name: "Main flore", rooms: "3"},
    { name: "Flore 1", rooms: "4"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
type flore = Array<{ name: string; rooms: string}>
