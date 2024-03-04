import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card2-button',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './card2-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card2ButtonComponent {

  @Input({required: true}) mySignal!:any;

  public aumentar(){
    this.mySignal.set(this.mySignal() + 1);
  }

}
