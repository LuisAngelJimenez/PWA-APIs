import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { APIService } from '../../services/API.service';
import { ResponseKanye } from '../../data/interfaces/response';

@Component({
  selector: 'app-using-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usingApi.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsingApiComponent {
  public quote = signal<ResponseKanye | null>(null);

  constructor(private AS: APIService) {
    this.ObtainingData();
  }

  public ObtainingData() {
    this.AS.getData().subscribe(
      ( data: ResponseKanye ) => {
        console.log("tu frase de kanye del dia: " +data.quote);
        this.quote.set(data);
      },
    );
  }
}
