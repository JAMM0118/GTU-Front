import { Component, inject, input, output } from '@angular/core';
import { GtuNeighborhoodsService } from '../../../services/gtu-neighborhoods.service';
import { GtuStopsService } from '../../../services/gtu-stops.service';import { Stops } from '../../../interfaces/models.interface';
;

@Component({
  selector: 'app-multiple-items-selected',
  imports: [],
  templateUrl: './multiple-items-selected.component.html',
})
export class MutipleItemsSelectedListComponent {
  gtuNeighborhoodService = inject(GtuNeighborhoodsService);


 }
