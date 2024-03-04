import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {

  menuList = routes
  .map((route) => route.children ?? []).flat().filter(route => route && !route.path?.includes('**'));

  constructor(){

  }
}
