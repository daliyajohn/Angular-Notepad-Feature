import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = '';

  constructor() {}

  onEnter(value, event) {
    this.value = value;

    let position = event.path['0'].childNodes.length;
    var g = document.createElement('div');
    g.setAttribute('id', 'Div' + position);
    // var textnode = document.createTextNode(value);
    // g.appendChild(textnode);
    document.getElementById('myList').appendChild(g);
  }
}
