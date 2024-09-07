import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../servicios/pokeapi.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { BuscarPokemonComponent } from "../buscar-pokemon/buscar-pokemon.component";

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [HttpClientModule, MatCardModule, MatButtonModule, CommonModule, BuscarPokemonComponent],
  providers: [PokeapiService],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})

export class ListaComponent implements OnInit{

  listaPokemones: any;
  pokemonesCompletos: any[] = [];
  pokemonData: any;
  constructor(private pokeApi: PokeapiService){}

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

  playSound(soundSource: string){
    const audio = new Audio();
    audio.src = soundSource;
    audio.load();
    audio.play();
  }

}
