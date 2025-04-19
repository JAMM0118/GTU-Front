import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { NeighborhoodResponse } from '../interfaces/reponses.interface';
import { Neighborhood } from '../interfaces/models.interface';
import { GtuMapper } from '../mapper/gtu.mapper';

@Injectable({ providedIn: 'root'})
export class GtuNeighborhoodsService {

  private http = inject(HttpClient);

  neighborhoodsSelected = signal<Neighborhood[]>([]);
  neighborhoodSelected = signal<Neighborhood | null>(null);
  neighborhoods = signal<Neighborhood[]>([]);

  constructor() {
    this.loadNeighboorhoods();
    console.log('Service initialized');
   }

  loadNeighboorhoods() {
    this.http.get<NeighborhoodResponse>(environment.backEndGTU + '/neighborhoods')
    .subscribe((res) => {
      console.log('response loaded:', res);
      const mapper = GtuMapper.mapDataNeighborhoodToNeighborhoodArray(res.data);
      console.log('mapped response:', {mapper});
      this.neighborhoods.set(mapper);
    })
  }
  addNeighborhood(neighborhood: Neighborhood) {
      this.neighborhoodSelected.set(neighborhood);
      console.log('neighborhood added:', neighborhood);
    }

  addNeighborhoods(neighborhood: Neighborhood) {
    if (this.neighborhoodsSelected().some((item) => item.id === neighborhood.id)) return;

    this.neighborhoodsSelected.update((prev) =>    [...prev, neighborhood]);
    console.log('neighborhood added:', neighborhood);
  }

  removeNeighborhood(neighborhood: Neighborhood) {
    this.neighborhoodsSelected.update((prev) => prev.filter((item) => item.id !== neighborhood.id));
    console.log('neighborhood removed:', neighborhood);
  }

  clearNeighborhoodsSelected() {
    this.neighborhoodsSelected.set([]);
    this.neighborhoodSelected.set(null);
    console.log('neighborhoods selected cleared');
  }
}
