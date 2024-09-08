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
import { PokeDialogComponent } from '../poke-dialog/poke-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private pokeApi: PokeapiService, public dialog: MatDialog){}

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

  openDialog(pokemon: any): void {
    this.pokeApi.getPokemon(pokemon).subscribe((details) => {
      this.dialog.open(PokeDialogComponent, {
        width: '400px',
        data: details
      });
    });
  }

  
}
 