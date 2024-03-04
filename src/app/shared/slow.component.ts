import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-slow",
  standalone: true,
  imports: [ CommonModule],
  template:`<section [ngClass]="['w-full h-[600px]',clase]">Slow Component</section>`

})

export class SlowComponent
{
@Input({required:true})clase!:string;

constructor(){
  const start = Date.now();
  while(Date.now() - start < 30000){
    console.log("Slow Component");
  }
}

}
