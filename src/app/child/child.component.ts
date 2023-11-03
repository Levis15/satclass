import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() data="";
@Output() welcome:EventEmitter<any>=new EventEmitter<any>();

new:string="";

function(){
  this.welcome.emit("Data Transfer")
}

  
}



