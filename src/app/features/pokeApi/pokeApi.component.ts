import { Component, signal } from '@angular/core';
import { Pokemon } from '../../data/interfaces/response';
import { PokeServiceService } from '../../services/pokeService.service';


@Component({
  selector: 'app-poke-api',
  standalone: true,
  templateUrl: './pokeApi.component.html',
})
export default class PokeApiComponent {
  public pokeSignal = signal< Pokemon[] >( [] );

  constructor( private ps : PokeServiceService ) {
    this.obtaningData();
  }

  public obtaningData() {
    this.ps.getPokemon().subscribe(( pokemonList : Pokemon[] ) => {
      console.log(' Obteniendo datos completos de los Pokémon ', pokemonList );
      this.pokeSignal.set( pokemonList );
    });
  }
}
