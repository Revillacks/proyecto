import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-fast",
  standalone: true,
  imports: [ CommonModule],
  template:`<section [ngClass]="['w-full h-[600px]',clase]"> <ng-content></ng-content>
  </section>`

})

export class FastComponent
{
@Input({required:true})clase!:string;

constructor(){

}

}

