import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailPattern, fullnamePattern, matriculaValid, confirmPasswordPattern, noName, passwordMatchValidator, forbiddenUsername, forbiddenEmail, matriculaPattern } from '../../../validators/common.validators';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, RegisterFormComponent
  ],
  templateUrl: './register-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterFormComponent {


  public formRegistro!: FormGroup;
  showPassword: boolean = false;

  private fb = inject(FormBuilder);

  public validators = {
    minlength: (min: number) => `Los caracteres minimos son ${min}!`,
    pattern: () => `Rellene el campo correctamente!`,
    required: () => `El campo es requerido!`,
  };

  constructor(){
    this.formRegistro = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(5), Validators.pattern(fullnamePattern)]],
      username: ['', [Validators.required, forbiddenUsername] ],
      password: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, forbiddenEmail, Validators.pattern(emailPattern)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(confirmPasswordPattern)]],
      matricula: ['', [Validators.required]]
    }, {validators: [noName, passwordMatchValidator, matriculaValid]});


  }

/*   validaControl(controlName: string){
    this.formRegistro.get(controlName)?.getError('minlength');
    return!!this.formRegistro.get(controlName)?.errors && this.formRegistro.get(controlName)?.touched;
  } */

/*   validalngth(){
    return !!this.formRegistro.get('username')?.errors?.['minLength'];
  }
  validaLarge(){
    return !!this.formRegistro.get('password')?.errors?.['minLength'];
  } */

  toggleShowPassword(): void {
    this.showPassword =!this.showPassword;
  }


register(){
  if(this.formRegistro.invalid) return;
}

public validateController(inputField: string){
  const input = this.formRegistro.get(inputField)
  if(input?.touched){
  if (input?.hasError('required')){
    return this.validators.required();
    }else if (input?.hasError('minlength')){
      return this.validators.minlength(5);
    }else if (input?.hasError('pattern')){
      return this.validators.pattern();
    }
}
return null;
}

}
