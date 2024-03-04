import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardButtonComponent } from '../../components/card-button/card-button/card-button.component';
import { Card2ButtonComponent } from '../../components/card2-button/card2-button/card2-button.component';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, CardButtonComponent, Card2ButtonComponent
  ],
  templateUrl: './contador.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContadorComponent {

  public contadorNormal: number = 0;

  public counterSigma = signal(0);
 }
