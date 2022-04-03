import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('circle') circle!: ElementRef;
  devices: device = [
    { type: "AC", value: "20°C", image:"../../../assets/air-conditioner.png" },
    { type: "Door", value: "Locked", image:"../../../assets/door.png" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  toggleSwitch() {
    this.circle.nativeElement.classList.toggle('active')

  }

}
type device = Array<{ type: string; value: string ; image: string}>;
