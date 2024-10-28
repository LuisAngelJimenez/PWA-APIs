import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PokeServiceService } from '../../services/pokeService.service';
import { ResponsePokemon, Pokemon } from '../../data/interfaces/response';

@Component({
  selector: 'app-poke-api',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pokeApi.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokeApiComponent {

  public pokeSignal = signal < Pokemon[] > ( [] );

  constructor( private ps : PokeServiceService ) {

    this.obtaningData();

  }

  public obtaningData() {

    this.ps.getPokemon().subscribe( ( response : ResponsePokemon ) => {

      console.log( ' Obteniendo los 10 Pokémon ' , response );
      this.pokeSignal.set( response.results );

    });

  }
}
