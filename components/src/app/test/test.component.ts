import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <!-- Component Interaction -->
  <h2> {{"Hello " + parentData}}</h2>
  <h2> {{"Hello " + customAlias}}</h2>
  <button (click) = "fireEvent()">Send Event</button>

<!-- Pipes -->
  <h2>{{ name }}</h2>
  <h2>{{ name | lowercase }}</h2>
  <h2>{{ name | uppercase }}</h2>
  <h2>{{ message | titlecase }}</h2>
  <h2>{{ name | slice:3:5 }}</h2>
  <h2>{{ person | json }}</h2>

  <h2> {{ 5.678 | number: '1.2-3' }} </h2>
  <h2> {{ 5.678 | number: '3.4-5' }} </h2>
  <h2> {{ 5.678 | number: '3.1-2' }} </h2>

  <h2> {{ 0.25 | percent }} </h2>

  <h2> {{ 0.25 | currency }} </h2>
  <h2> {{ 0.25 | currency: 'INR' }} </h2>
  <h2> {{ 0.25 | currency: 'EUR': 'code' }} </h2>

  <h2> {{ date }} </h2>
  <h2> {{ date | date: 'short' }} </h2>
  <h2> {{ date | date: 'shortDate' }} </h2>
  <h2> {{ date | date: 'shortTime' }} </h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  
  // Component Interaction
  @Input() public parentData;  // Using input to specify that the parentData is coming from app component
  @Input('parentData2') public customAlias;   //defining customAlias by referring to the data coming from parent component inside Input decorator

  @Output() public childEvent = new EventEmitter();

  // Pipes
  public name = "Spiderman";
  public message = "I love myself!";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  public date = new Date();
  
  constructor() { }

  ngOnInit(): void { 
  }

  fireEvent(){
    this.childEvent.emit("Event Emitted!")
  }




}
