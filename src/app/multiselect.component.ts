import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MultiSelectService } from './multiselect.service';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html'
})
export class MultiselectComponent {
  categories$: Observable<Array<string>>;

  constructor(private dataService: MultiSelectService) {
    this.categories$ = dataService.categories$;
  }

  onScrollingFinished() {
    console.log('load more');
    this.dataService.loadMore();
  }
}