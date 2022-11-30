import { Component, VERSION } from '@angular/core';
import { BoxDirective } from './box.directive';

@Component({
  selector: 'my-app',
  // hostDirectives:[BoxDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
