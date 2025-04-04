import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { StopsResponse } from '../interfaces/reponses.interface';
import { environment } from '../../../environments/environment';
import { GtuMapper } from '../mapper/gtu.mapper';
import { Stops } from '../interfaces/models.interface';

@Injectable({
  providedIn: 'root'
})
export class GtuStopsService {

  private http = inject(HttpClient);

  stopsSelected = signal<Stops[]>([]);
  stopSelected = signal<Stops | null>(null);
  stops = signal<Stops[]>([]);
  constructor() {
    this.loadStops();
    console.log('Service initialized');
  }

  loadStops() {
    this.http.get<StopsResponse>(environment.backEndGTU + '/stops')
      .subscribe((res) => {
        console.log('response loaded:', res);
        const mapper = GtuMapper.mapDataResponsesToMyModelArray(res.data);
        console.log('mapped response:', { mapper });
        this.stops.set(mapper);
      })
  }


  addStops(stop: Stops) {
    if (this.stopsSelected().some((item) => item.id === stop.id)) return;
    this.stopsSelected.update((prev) => [...prev, stop]);
    console.log('stop added:', stop);
  }

  addStop(stop: Stops) {
    this.stopSelected.set(stop);
    console.log('stop added:', stop);
  }

  removeStops(stop: Stops) {
    this.stopsSelected.update((prev) => prev.filter((item) => item.id !== stop.id));
    console.log('stop removed:', stop);
  }

  clearStopsSelected() {
    this.stopsSelected.set([]);
    this.stopSelected.set(null);
    console.log('neighborhoods selected cleared');
  }

  createStop(stop: Stops) {
    this.http.post<Stops>(environment.backEndGTU + '/stops', {
      params: {

        name: stop.name,
        description: stop.description,
        neighborhoodId: stop.neighborhoodId,
        latitude: 40.7128,
        longitude: -74.006,
      }
    }



    )
      .subscribe((res) => {
        console.log('Stop added to backend:', res);
      });
  }

}
