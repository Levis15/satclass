import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'input';
  label:string="hi";
  anu:any="";


 kavi(sar:any){
   this.anu=sar
}


  
}
