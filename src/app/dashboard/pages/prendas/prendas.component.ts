import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-prendas',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './prendas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PrendasComponent {
  formClothing!: FormGroup;
  classifications = ['Adultos', 'Jovenes', 'Morros'];
  private fb = new FormBuilder();

  constructor() {
    this.createForm();
  }

  createForm() {
    this.formClothing = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      price: [null, [Validators.required,Validators.min(1), Validators.max(5000)]],
      stock: [null, [Validators.required, Validators.min(1), Validators.max(500)]],
      brand: ['', Validators.required],
      classification: ['', Validators.required],
    });
  }

  // validaControl(controlName: string) {
  //   const control = this.formClothing.get(controlName);
  //   return control && control.invalid && control.touched;
  // }

  validaControl(controlName: string){
    return!!this.formClothing.get(controlName)?.errors && this.formClothing.get(controlName)?.touched;
  }

  validaPrice(){
    return !!this.formClothing.get('price')?.errors?.['max'];
  }

  validaStock(){
    return !!this.formClothing.get('stock')?.errors?.['max'];
  }

  saveClothing() {
    if(this.formClothing.invalid){
    this.formClothing.markAllAsTouched();
    }else{
      console.log('this.formClothing.value');
      this.formClothing.reset({
        name: 'Playera Pokemon',
        description: 'Esta muy vergas esta playera de color negro con Pikachu',
        price: 433,
        stock: 23,
        brand: 'Cuidado con el perro',
        classification: 'Adultos',
      });
    }
  }
}
