import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TaskComponent } from '../../components/task/task.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [
    CommonModule, TaskComponent, ReactiveFormsModule
  ],
  templateUrl: './tareas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TareasComponent {

  public formTask!: FormGroup;
  public taskSignal:any = signal([]);
  private fb = inject(FormBuilder);


  public validators = {
    minlength: (min:number) => `Los caracteres minimos son ${min}!`,
    required: () => `El campo es requerido!`
  }

  constructor(){
    this.formTask = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(4)]],
      descripcion: ['',[Validators.required, Validators.minLength(8)]]
    })
  }

  public validateController(inputField: string) {
    const input = this.formTask.get(inputField);
    if (input?.touched) {
      if (input?.hasError('required')) {
        return this.validators.required();
      } else if (input?.hasError('minlength')) {
        const requiredLength = input.getError('minlength')?.requiredLength;
        return this.validators.minlength(requiredLength);
      }
    }
    return null;
  }



 public addTask() {
    if (this.formTask.valid) {
    const taskData = [...this.taskSignal(), this.formTask.value]
    this.taskSignal.set(taskData)
    }
  }
/* Funcion addTask
  Si el formulario es valido
  declaramos una variable que va a guardar los datos y los tres puntos spritoperator sirve para que si un arreglo tienen objetos dentros
  va a iterar esos objetos y los va a agregar a un arreglo nuevo, pasamos el valor del formulario */
}
