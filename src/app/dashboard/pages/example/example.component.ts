import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Pokemon {
  name: string;
  description: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export default class ExampleComponent {

  public showContent: boolean = false;

  public range:number=9;

  public showPokemonModal: boolean = false;

  public pokemonEspecifico!: Pokemon;

  /* pokes:any [] = [
    'Charizard','Bulbsasur', 'Squirtle', 'Meowscarada', 'Azumarrill', 'Chickorita', 'Pikachu'
  ]; */

  public pokes: Pokemon [] = [
    { name: 'Charizard', description: 'Un poderoso Pokémon de tipo Fuego y Volador', image: 'assets/img/charizard.png', url:'' },
    { name: 'Bulbasaur', description: 'Un encantador Pokémon de tipo Planta y Veneno', image: 'assets/img/bulbasaur.webp', url: '' },
    { name: 'Squirtle', description: 'Un refrescante Pokémon de tipo Agua conocido por su resistente caparazón', image: 'assets/img/squirtle.png', url: '' },
    { name: 'Meowscarada', description: 'Un ágil Pokémon de tipo Hierba y Siniestro, famoso por su elegancia y destreza', image: 'assets/img/meowscarada.png', url: '' },
    { name: 'Azumarill', description: 'Un alegre Pokémon de tipo Agua y Hada, conocido por su fuerte vínculo con las fuentes acuáticas', image: 'assets/img/azumarill.webp', url: '' },
    { name: 'Chikorita', description: 'Un Pokémon de tipo Planta, adorable y amistoso, ideal para entrenadores principiantes', image: 'assets/img/chikorita.png', url: '' },
    { name: 'Pikachu', description: 'El icónico Pokémon eléctrico, conocido por su poderosa habilidad para generar electricidad', image: 'assets/img/pikachu.png', url: '' }
  ];


  pokes2:any [] = [
  ];

  public togglePokemonModal(pokemon?: Pokemon){
    this.showPokemonModal =!this.showPokemonModal;
    if ( this.showPokemonModal){
      this.pokemonEspecifico = pokemon || {
        name: '',
        description: '',
        image: '',
        url: ''
      }
    }
  }





  public changecontent(){
    this.showContent= !this.showContent
    }
}
