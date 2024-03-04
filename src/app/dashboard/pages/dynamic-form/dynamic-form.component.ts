import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './dynamic-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DynamicFormComponent {
  playlistForm!: FormGroup

  newSong: FormControl = new FormControl('', Validators.required);

  constructor(
    private fb: FormBuilder,
  ) {
    this.playlistForm = this.fb.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      songs: fb.array([
        ['Whish You Were Here', Validators.required],
        ['Plastic Trees', Validators.required],
        ['BYOB', Validators.required],
      ])
    });

  }


  isValidControl(control: string){
    return this.playlistForm.controls[control].errors &&
    this.playlistForm.controls[control].touched;
  }

  isValidInArray(formarray: FormArray, index: number){
    return formarray.controls[index].errors &&
    formarray.controls[index].touched;
  }

    onDeleteSongs(index: number){
      this.favoriteSongs.removeAt(index);
    }


    getFliedError(field:string){
      if( !this.playlistForm.controls[field]) return null;
      const errors = this.playlistForm.controls[field].errors || {}

      for( const key of Object.keys(errors)){
        switch(key){
          case 'required':
            return 'Este campo es requerido';
          case 'minlength':
            return 'Minimo 3 caracteres';
        }
      }
      return null;
    }
  get favoriteSongs(){
    return this.playlistForm.get('songs') as FormArray
  }

  addSong(){
    if(this.newSong.invalid) return;
    const newSong = this.newSong.value;
    this.favoriteSongs.push(
      this.fb.control(newSong, Validators.required)
    );
  }







}
