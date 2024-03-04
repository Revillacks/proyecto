import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";

export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
export const fullnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const confirmPasswordPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const matriculaPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

export function noName(control: AbstractControl): ValidationErrors | null
{
    const value = control.get('fullname')?.value;
    console.log(value);
    if(value === 'Revillacks'){
      control.get('fullname')?.setErrors({'noRevillacks': true});
    }
    return (null);
}

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null{
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  if (password === confirmPassword){
    control.get('confirmPassword')?.setErrors({passwordMismatch: true});
    return {passwordMismatch: true};
  }
  return null;
}

export function matriculaValid(control: AbstractControl): ValidationErrors | null{
  const matriculas_rechazadas = [
    'UTTI212052',
    'UTTI212053',
    'UTTI212054',
    'UTTI212055',
    'UTTI212033'
  ];
  const matricula = control.get('matricula')?.value;
  console.log(matricula.toUpperCase());
  if ( matriculas_rechazadas.includes(matricula.toUpperCase()) ){
    control.get('matricula')?.setErrors({'repeated': true})
  }
  return (null);
}

export function forbiddenUsername(control: AbstractControl): ValidationErrors | null {
  const forbiddenUsernames = ['erick corro'];
  return forbiddenUsernames.includes(control.value) ? { forbiddenUsername: true } : null;
}

export function forbiddenEmail(control: AbstractControl): ValidationErrors | null {
  const forbiddenEmails = ['erick@utvco.com'];
  return forbiddenEmails.includes(control.value) ? { forbiddenEmail: true } : null;
}
