import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  // templateUrl: './test.component.html',
  // template: '<div>Hello</div>', //single line
  //multiple line
  template: `<div>
    Hello World
    <p>I rock</p>
  </div> `,
  // styleUrls: ['./test.component.css'],
  styles: [
    `
      div {
        color: red;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
