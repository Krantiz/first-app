import { Component, EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
  <!--  <button (click)="eventTester()">Clicl Me!!</button>  -->
  <button (click)="onClicked()">Clicl Me!! (Custom event binding)</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();
  onClicked() {
    this.clicked.emit('Normal event binding working!!!');
  }

  eventTester() {
    alert('Custom event binding working...');
  }

}
