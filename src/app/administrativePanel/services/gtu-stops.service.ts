import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { StopsResponse } from '../interfaces/reponses.interface';
import { environment } from '../../../environments/environment';
import { GtuMapper } from '../mapper/gtu.mapper';
import { Stops } from '../interfaces/models.interface';

@Injectable({providedIn: 'root'})
export class GtuStopsService {

  private http = inject(HttpClient);

  stopsSelected = signal<Stops[]>([]);
  stops = signal<Stops[]>([]);

  constructor() {
    this.loadStops();
    console.log('Service initialized');
  }

  loadStops() {
    this.http.get<StopsResponse>(environment.backEndGTU + '/stops')
      .subscribe((res) => {
        console.log('response loaded:', res);
        const mapper = GtuMapper.mapDataStopsToStopsArray(res.data);
        console.log('mapped response:', { mapper });
        this.stops.set(mapper);
      })
  }

  addStops(stop: Stops) {
    if (this.stopsSelected().some((item) => item.id === stop.id)) return;
    this.stopsSelected.update((prev) => [...prev, stop]);
    console.log('stop added:', stop);
  }


  removeStops(stop: Stops) {
    this.stopsSelected.update((prev) => prev.filter((item) => item.id !== stop.id));
    console.log('stop removed:', stop);
  }

  clearStopsSelected() {
    this.stopsSelected.set([]);
    console.log('neighborhoods selected cleared');
  }

  createStop(stop: Stops) {
    this.http.post<StopsResponse>(environment.backEndGTU + '/stops', {
      name: stop.name,
      description: stop.description,
      neighborhoodId: stop.neighborhoodId,
      latitude: 40.7128,
      longitude: -74.006,
    })
    .subscribe((res) => {
        console.log('Stop added to backend:', res);
        if (!Array.isArray(res.data)) {
          const mapper = GtuMapper.mapDataStopsToStops(res.data);
          this.stops.update((prev) => [...prev, mapper]);
        }
        console.log('All stops:', this.stops());
      });
  }

  deleteStop(id: number) {
    this.http.delete(environment.backEndGTU + '/stops/' + id)
      .subscribe((res) => {
        console.log('Stop deleted from backend:', res);
        this.stops.update((prev) => prev.filter((item) => item.id !== id));
      });
  }
}
