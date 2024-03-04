import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FastComponent } from '../../../shared/fast.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface empleado {
  name: string,
  lastname: string,
  salary: null,
  email: string,
  position: string
}

@Component({
  selector: 'app-examen',
  standalone: true,
  imports: [
    CommonModule, FastComponent, ReactiveFormsModule
  ],
  templateUrl: './examen.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExamenComponent {
  formEmpleado!: FormGroup;
  private fb = inject(FormBuilder);

  public empleados: empleado [] = [
    { name:"Erick", lastname:'Corro', salary: null, email:'', position:"boss"},
    { name:"Esteban", lastname:'Rios', salary: null , email:'', position:"boss"},
    { name:"Thomas", lastname:'Gonzalez', salary: null, email:'', position:"boss"},
    { name:"Iver", lastname:'Lopez', salary: null, email:'', position:"boss"}
  ]

  constructor(
    // private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.formEmpleado = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      lastname: [''],
      salary: [null, [Validators.required, Validators.min(3000)]],
      email: ['', [Validators.required]],
      position: ['', [Validators.required]],
    });
  }

  validaControl(controlName: string){
    return !!this.formEmpleado.get(controlName)?.errors && this.formEmpleado.get(controlName)?.touched;
  }

  validaSalario(){
    return !!this.formEmpleado.get('salary')?.errors?.['min'];
  }
  agregarEmpleado() {
    if(this.formEmpleado.valid) {
      this.empleados.push(this.formEmpleado.value);

      // this.formEmpleado.reset();
    }
    console.log('asdasd', this.formEmpleado.value);

  }

 }

