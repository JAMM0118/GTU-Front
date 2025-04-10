import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Routes } from '../interfaces/models.interface';
import { RoutesResponse } from '../interfaces/reponses.interface';
import { environment } from '../../../environments/environment';
import { GtuMapper } from '../mapper/gtu.mapper';

@Injectable({providedIn: 'root'})
export class GtuRoutesService {

  private http = inject(HttpClient);

  routes = signal<Routes[]>([]);

  constructor() {
    this.loadRoutes();
    console.log('Service initialized');
  }

  loadRoutes() {
    this.http.get<RoutesResponse>(environment.backEndGTU + '/routes')
      .subscribe((res) => {
        console.log('response loaded:', res);
        const mapper = GtuMapper.mapDataRoutesToRoutesArray(res.data);
        console.log('mapped response:', { mapper });
        this.routes.set(mapper);
      })
  }


  createRoute(route: Routes) {
    this.http.post<RoutesResponse>(environment.backEndGTU + '/routes', {
      name: route.name,
      description: route.description,
      neighborhoodIds: route.neighborhoods,
      stops: route.stops,
      startTime: route.startTime,
      endTime: route.endTime,
    })
    .subscribe((res) => {
        console.log('Route added to backend:', res);
        if (!Array.isArray(res.data)) {
          const mapper = GtuMapper.mapDataRoutesToRoutes(res.data);
          this.routes.update((prev) => [...prev, mapper]);
        }
        console.log('All routes:', this.routes());
      });
  }

  deleteRoute(id: number) {
    this.http.delete(environment.backEndGTU + '/routes/' + id)
      .subscribe((res) => {
        console.log('Route deleted from backend:', res);
        this.routes.update((prev) => prev.filter((item) => item.id !== id));
      });
  }
}
