import { Component, Input } from '@angular/core';
import { BlockItem } from '../app.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() block: BlockItem;
  @Input() singleValue?: string;
}
