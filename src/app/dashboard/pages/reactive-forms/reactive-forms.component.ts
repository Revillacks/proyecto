import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export default class ReactiveFormsComponent {

  public formFood!: FormGroup;
  categories = ['Japonesa', 'Coreana', 'Mexicana', 'Italiana']
  private fb = inject(FormBuilder);


  constructor( /* private fb:FormBuilder */){
    this.formFood = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(50)]],
      urlImg: ['', Validators.required],
      price: [null, Validators.required],
      categoria: ['Japonesa', Validators.required],
    });
  }

    validaControl(control:string){
      return !!this.formFood.get(control)?.hasError && this.formFood.get(control)?.touched;
    }

  saveFood(){
    console.log(this.formFood.get('urlImg')?.errors);
    if(this.formFood.invalid) return;
  }
}
