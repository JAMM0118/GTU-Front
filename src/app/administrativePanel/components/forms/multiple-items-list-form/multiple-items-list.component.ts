import {Component, inject } from '@angular/core';
import { GtuNeighborhoodsService } from '../../../services/gtu-neighborhoods.service';
import { MutipleItemsSelectedListComponent } from '../multiple-items-selected/multiple-items-selected.component';

@Component({
  selector: 'app-multiple-items-list',
  imports: [MutipleItemsSelectedListComponent],
  templateUrl: './multiple-items-list.component.html',
})
export class MutipleItemsListComponent {

  gtuNeighborhoodService = inject(GtuNeighborhoodsService);
 }
