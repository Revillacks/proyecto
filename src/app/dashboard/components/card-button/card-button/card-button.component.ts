import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-button',
  standalone: true,
  imports: [
    CommonModule, RouterModule,
  ],
  templateUrl: './card-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardButtonComponent {

  @Input({required: true}) contadorNormal: number = 0;

  public aumentar(){
    this.contadorNormal ++;
    console.log(this.contadorNormal, 'Contador normal');
  }



  constructor(){

  }
 }
