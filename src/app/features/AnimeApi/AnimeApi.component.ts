import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AnimeApiService } from '../../services/AnimeApi.service';
import { ResponseAnime } from '../../data/interfaces/response';

@Component({
  selector: 'app-anime-api',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './AnimeApi.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AnimeApiComponent {

  public animeSignal = signal < ResponseAnime | null > ( null ) ;

    constructor( private As:AnimeApiService ){
      this.obtainingData();

    }

    obtainingData() {
      this.As.ObtainData().subscribe(
        ( response: ResponseAnime ) => {
          console.log( 'obteniendo un anime' , response );
          console.log( 'obteniendo su título' , response.data.title );
          console.log( 'obteniendo su imagen ' , response.data.images.jpg.image_url );
          
          this.animeSignal.set({
            data: { 
              title: response.data.title,
              images:response.data.images 
            }});
        }
      );
    }
 }
