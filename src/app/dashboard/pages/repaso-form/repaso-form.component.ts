import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-repaso-form',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './repaso-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RepasoFormComponent implements OnInit {
  questionForm!: FormGroup;
  newQstCtrl: FormControl;
  newAnsCtrl: FormControl;

  constructor(private fb: FormBuilder) {
    // Inicializar los FormControl con validadores
    this.newQstCtrl = new FormControl('', Validators.required);
    this.newAnsCtrl = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      qaPairs: this.fb.array([])
    });
  }

  addQst(): void {
    // Verificar que ambos controles sean válidos
    if (this.newQstCtrl.valid && this.newAnsCtrl.valid) {
      const qaPairs = this.questionForm.get('qaPairs') as FormArray;
      qaPairs.push(this.fb.group({
        question: this.newQstCtrl.value,
        answer: this.newAnsCtrl.value
      }));
      // Limpiar los controles después de agregar la pregunta y respuesta
      this.newQstCtrl.reset();
      this.newAnsCtrl.reset();
    } else {
      // Aquí puedes manejar el error, como mostrar un mensaje
      console.error('La pregunta y la respuesta son requeridas.');
    }
  }

  onDeleteQst(index: number): void {
    const qaPairs = this.questionForm.get('qaPairs') as FormArray;
    qaPairs.removeAt(index);
  }

  get qaPairs(): FormArray {
    return this.questionForm.get('qaPairs') as FormArray;
  }
}
