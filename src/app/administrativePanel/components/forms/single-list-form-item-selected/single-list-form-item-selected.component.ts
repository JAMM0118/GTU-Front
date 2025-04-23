import { Component, inject } from '@angular/core';
import { GtuNeighborhoodsService } from '../../../services/gtu-neighborhoods.service';

@Component({
  selector: 'app-single-list-form',
  imports: [],
  templateUrl: './single-list-form-item-selected.component.html',
})
export class SingleListFormComponent {
  neighborhoodService = inject(GtuNeighborhoodsService);

  ngOnDestroy() {
    this.neighborhoodService.clearNeighborhoodsSelected();

  }
}
