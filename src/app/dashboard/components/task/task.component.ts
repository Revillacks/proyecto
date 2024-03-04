import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './task.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {

  @Input({required: true}) mySignal!:any;

  

}
