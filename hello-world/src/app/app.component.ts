import { Component } from '@angular/core';

// Component Decorator
@Component({
  selector: 'app-root', //HTML element which triggers component;
  templateUrl: './app.component.html', //points to html file that represents view of the component; this gets added to index.html
  styleUrls: ['./app.component.css'], // Custom styling the component
})
export class AppComponent {
  title = 'hello-world'; //Replaces {{title}} in HTML
}
