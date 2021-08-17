import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{ name }}</h2>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ 'Welcome ' + name }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ greetUser() }}</h2>
    <h2>{{ siteUrl }}</h2>
    <input [id]="myId" type="text" value="Vishwas" />
    <input [disabled] = "false" id="{{ myId }}" type="text" value="Vishwas" />
    <input [disabled] = "isDisabled" id="{{ myId }}" type="text" value="Vishwas" />
    <input bind-disabled = "true" id="{{ myId }}" type="text" value="Vishwas" /> 
    <h2 class = "text-success">Codevolution</h2>
    <h2 [class] = "successClass">Codevolution</h2>
    <h2 [class.text-danger] = "hasError">Codevolution</h2>
    <h2 [ngClass] = "messageClasses">Codevolution</h2>
    <h2 [style.color] = "'orange'">Style Binding 1</h2>
    <h2 [style.color] = "hasError?'red':'green'">Style Binding 2</h2>
    <h2 [style.color] = "highlightColor">Style Binding 3</h2>
    <h2 [ngStyle] = "titleStyles">Style binding 4</h2>
    <button (click) = "onClick()">Greet</button>
    {{greeting}}
    <button (click) = "greeting = 'Welcome Priyansh'">Greet</button>
    {{greeting}}
    <button (click) = "onClickEvent($event)">Greet</button>
    <input #myInput type = "text"> <!-- #myInput is a called a template reference variable -->
    <button (click) = "logMessageValue(myInput.value)">Log value</button>
    <button (click) = "logMessageReferenceVariable(myInput)">Log reference variable</button>

    <!-- Two way binding -->
    <input [(ngModel)] = "name" type = "text">
    {{name}}

    <!-- Structural Directive - ngIf -->
    <h2 *ngIf = "displayName; else elseBlock1">
      ngIf 
    </h2>

    <ng-template #elseBlock1>
    <h2>
    Name is hidden
    </h2>
    </ng-template>

    <div *ngIf = "displayName; then ifBlock; else elseBlock2"> </div>

    <ng-template #ifBlock>
    <h2>
    Executing if block
    </h2>
    </ng-template>
  <ng-template #elseBlock2>
    <h2>
    Executing else block
    </h2>
    </ng-template>

  <!-- Structural Directive - ngSwitch -->
  <div [ngSwitch] = "color">
  <div *ngSwitchCase = "'red'">You picked red color </div>
  <div *ngSwitchCase = "'blue'">You picked blue color </div>
  <div *ngSwitchCase = "'green'">You picked green color </div>
  <div *ngSwitchDefault> Pick again </div>
  </div>

    <!-- Structural Directive - For Loop -->
    <div *ngFor = "let color of colorNgFor; index as i; first as f; last as l; odd as o; even as e">
    <h2>{{i}} {{f}} {{l}} {{o}} {{e}} {{color}}</h2>
    </div>
  `,
  // {{ variable }} is called interpolation
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style: italic;
    }

  `]
})

export class TestComponent implements OnInit {
  public name = 'Priyansh';
  public successClass = "text-success";
  public hasError = true;
  public myId = 'testId';
  public isDisabled = true;
  public siteUrl = window.location.href;
  public highlightColor = "violet";
  public isSpecial = true;
  public messageClasses = {
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial,
  }
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public greeting = "";

  displayName = false;

  public color = "red";

  public colorNgFor = ["red","blue","green","yellow"];

  constructor() {}

  ngOnInit() {}

  greetUser() {
    return 'Hello ' + this.name;
  }

  onClick(){
    console.log("Hi! This is Priyansh!");
    this.greeting = 'Yoooo! This is Priyansh';
  }

  onClickEvent(event){
    console.log(event);
    this.greeting = event.type;
  }

  logMessageValue(value){
    console.log(value);
  }
  logMessageReferenceVariable(value){
    console.log(value);
  }
}
