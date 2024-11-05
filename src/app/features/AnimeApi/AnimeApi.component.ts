import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AnimeApiService } from '../../services/AnimeApi.service';
import { ResponseAnime } from '../../data/interfaces/response';
import { AnimeApiData } from '../../services/IndexedDB.service';

@Component({
  selector: 'app-anime-api',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './AnimeApi.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AnimeApiComponent {

  public animeSignal = signal < ResponseAnime | null >( null );

  constructor( private As : AnimeApiService ) {

    this.obtainingData();

  }
  public obtainingData() {
    this.As.ObtainData().subscribe( ( response: ResponseAnime | AnimeApiData | undefined ) => {
      if ( response && 'data' in response ) {
        console.log( ' Obteniendo un anime ' , response );
        this.animeSignal.set({
          data: {
            title: response.data.title,
            images: response.data.images,
          },
        });
      } else if ( response && 'title' in response ) {
        console.log( ' Recuperando desde IndexedDB ' , response );
        this.animeSignal.set({
          data: {
            title: response.title,
            images: {
              jpg: {
                large_image_url: response.imageUrl,
              }
            }
          }
        });
      }
    });
  }
  
  
}
