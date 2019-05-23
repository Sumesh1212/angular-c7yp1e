import { Component, Input } from '@angular/core';

@Component({
  selector: 'view-change',
  templateUrl: './viewchange.component.html',
  styleUrls: ['./viewchange.component.css'],
})
export class ViewchangeComponent  {
  @Input() name: string;
}
