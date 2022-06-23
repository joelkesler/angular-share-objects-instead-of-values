import { Component, VERSION } from '@angular/core';

export interface ObjectType {
  name: string;
  description: string;
  blocks: BlockItem[];
}
export interface BlockItem {
  content: string;
  color: string;
}

let objectToShare: ObjectType = {
  name: 'Passing objects to components instead of values',
  description: 'Try out this great new trick',

  blocks: [
    {
      content:
        "Isn't it cool how objects are shared as references, and not copied?",
      color: '#0000FF',
    },
    {
      content:
        'This is in a new block, and when editing it, you will also update the provided object',
      color: `#FF0000`,
    },
  ],
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  objectToShare = objectToShare;

  get objectToShareText(): string {
    return JSON.stringify(this.objectToShare);
  }
}
