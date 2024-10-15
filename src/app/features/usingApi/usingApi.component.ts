import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APIService } from '../../services/API.service';

@Component({
  selector: 'app-using-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usingApi.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsingApiComponent {
  apiData: any;

  constructor(private AS: APIService) {
    this.ObtainingData();
  }

  ObtainingData(){
    this.AS.getData().subscribe(
      (data) => {
        this.apiData = data
        console.log(this.apiData);
      },
    );
  }
}
