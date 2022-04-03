import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flore',
  templateUrl: './flore.component.html',
  styleUrls: ['./flore.component.scss']
})
export class FloreComponent implements OnInit {
  @Input() name = '';
  @Input() rooms = '';
  constructor() { }

  ngOnInit(): void {
  }

}
