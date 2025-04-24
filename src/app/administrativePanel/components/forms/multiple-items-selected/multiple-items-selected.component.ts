import { Component, inject, input} from '@angular/core';
import { GtuNeighborhoodsService } from '../../../services/gtu-neighborhoods.service';
import { GtuStopsService } from '../../../services/gtu-stops.service';import { Stops } from '../../../interfaces/models.interface';
;

@Component({
  selector: 'app-multiple-items-selected',
  imports: [],
  templateUrl: './multiple-items-selected.component.html',
})
export class MutipleItemsSelectedListComponent {
  bandera = input.required<boolean>();
  stopsService = inject(GtuStopsService);
  neighborhoodService = inject(GtuNeighborhoodsService);

  itemToRemove = (item : any) => {
    this.bandera() ?  this.neighborhoodService.removeNeighborhood(item)
    :this.stopsService.removeStops(item);

  }

  toggleDropdown() {
      this.bandera() ?
      document.getElementById('dropdownNeighboorHood')?.classList.toggle('hidden')
      :document.getElementById('dropdownStops')?.classList.toggle('hidden');
  }

  ngOnDestroy() {
    this.stopsService.clearStopsSelected();
    this.neighborhoodService.clearNeighborhoodsSelected();

  }
 }
