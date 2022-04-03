import {  Component, OnInit, ViewChild, ElementRef, Input  } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  @ViewChild('circle') circle!: ElementRef;
  @Input() type = '';
  @Input() value = '';
  @Input() image = '';
  constructor() { }

  ngOnInit(): void {
  }

  toggleSwitch() {
    this.circle.nativeElement.classList.toggle('active')

  }

}
