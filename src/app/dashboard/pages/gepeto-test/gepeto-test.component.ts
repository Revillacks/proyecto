import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-repaso-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gepeto-test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GepetoTestComponent {

}
