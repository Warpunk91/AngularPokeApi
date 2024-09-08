import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../servicios/pokeapi.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { BuscarPokemonComponent } from "../buscar-pokemon/buscar-pokemon.component";
import { MatDialog } from '@angular/material/dialog';
import { PokeDialogComponent } from '../poke-dialog/poke-dialog.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [HttpClientModule, MatCardModule, MatButtonModule, CommonModule, BuscarPokemonComponent, RouterLink],
  providers: [PokeapiService],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})

export class ListaComponent implements OnInit{

  listaPokemones: any;
  pokemonesCompletos: any[] = [];
  pokemonData: any;
  constructor(private pokeApi: PokeapiService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.pokeApi.obtenerListadoPokemones().subscribe({
      next: (data: any)=> {
        this.listaPokemones = data;
        this.listaPokemones.results.forEach((element: any) => {
          this.pokeApi.obtenerUnPokemon(element.url).subscribe({
            next: (data: any) => {
              this.pokemonesCompletos.push(data)
            },
          })
        });
        console.log(this.listaPokemones);
        console.log(this.pokemonesCompletos);
      }, 
      error: (err: any) => {console.log(err)}
    })
  }

  nextPage(nextUrl: string): void{  
    this.pokeApi.nextPage(nextUrl).subscribe({
      next: (data: any)=> {
        this.listaPokemones = data;
        this.listaPokemones.results.forEach((element: any) => {
          this.pokeApi.obtenerUnPokemon(element.url).subscribe({
            next: (data: any) => {
              this.pokemonesCompletos.push(data)
            },
          })
        });
        console.log(this.listaPokemones);
        console.log(this.pokemonesCompletos);
      }, 
      error: (err: any) => {console.log(err)}
    })
  }

  prevPage(prevUrl: string): void{  
    this.pokeApi.prevPage(prevUrl).subscribe({
      next: (data: any)=> {
        this.listaPokemones = data;
        this.listaPokemones.results.forEach((element: any) => {
          this.pokeApi.obtenerUnPokemon(element.url).subscribe({
            next: (data: any) => {
              this.pokemonesCompletos.push(data)
            },
          })
        });
        console.log(this.listaPokemones);
        console.log(this.pokemonesCompletos);
      }, 
      error: (err: any) => {console.log(err)}
    })
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
