import { Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PokeapiService } from '../../servicios/pokeapi.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ListaComponent } from "../lista/lista.component";

@Component({
  selector: 'app-buscar-pokemon',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    ListaComponent
],
  providers: [PokeapiService],
  templateUrl: './buscar-pokemon.component.html',
  styleUrl: './buscar-pokemon.component.scss'
})

export class BuscarPokemonComponent{
  idPokemon: string ='';
  pokemonData: any;

  constructor(private pokeApi: PokeapiService){}

  buscarPokemon(){
    if (this.idPokemon) {
      this.pokeApi.getPokemon(this.idPokemon.toLowerCase()).subscribe({
        next: (data: any)=> {
          this.pokemonData = data;
        },
      });
    }
    console.log(this.pokemonData);
  }

  nextPage(nextUrl: string): void{}

  playSound(soundSource: string){
    const audio = new Audio();
    audio.src = soundSource;
    audio.load();
    audio.play();
  }

  
}
 