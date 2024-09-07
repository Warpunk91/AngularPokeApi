import { Routes } from '@angular/router';
import { ListaComponent } from './componentes/lista/lista.component';
import { BuscarPokemonComponent } from './componentes/buscar-pokemon/buscar-pokemon.component';

export const routes: Routes = [
    {
        path:'',
        component: ListaComponent   
    },
    {
        path:'Buscar-pokemon',
        component: BuscarPokemonComponent 
    }
];  


