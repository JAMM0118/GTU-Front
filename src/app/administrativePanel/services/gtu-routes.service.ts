import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Routes } from '../interfaces/models.interface';
import { RoutesResponse } from '../interfaces/reponses.interface';
import { environment } from '../../../environments/environment';
import { GtuMapper } from '../mapper/gtu.mapper';
import { GtuNeighborhoodsService } from './gtu-neighborhoods.service';
import { GtuStopsService } from './gtu-stops.service';

@Injectable({ providedIn: 'root' })
export class GtuRoutesService {

  private http = inject(HttpClient);

  routes = signal<Routes[]>([]);
  neighborhoodsService = inject(GtuNeighborhoodsService);
  stopsService = inject(GtuStopsService);
  routeToEdit = signal<Routes | null>(null);


  constructor() {
    this.loadRoutes();
    console.log('Service initialized');
  }
  mapRecordFormToRoute(formValues: Record<string, string>): Routes {
    return {
      id: this.routeToEdit()!.id || undefined,
      name: formValues['name'],
      description: formValues['description'],
      neighborhoods: this.neighborhoodsService.neighborhoodsSelected().map((neighborhood) => neighborhood.id),
      stops: this.stopsService.stopsSelected().map((stop) => stop.id!),
      startTime: formValues['startTime'],
      endTime: formValues['endTime'],

    };
  }
  loadRoutes() {
    this.http.get<RoutesResponse>(environment.backEndGTU_RouteStop + '/routes', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      }
    })
      .subscribe((res) => {
        console.log('response loaded:', res);
        const mapper = GtuMapper.mapDataRoutesToRoutesArray(res.data);
        console.log('mapped response:', { mapper });
        this.routes.set(mapper);
      })
  }

  createRoute(form: Record<string, string>) {
    const route = this.mapRecordFormToRoute(form);
    this.http.post<RoutesResponse>(environment.backEndGTU_RouteStop + '/routes', {
      name: route.name,
      description: route.description,
      neighborhoodIds: route.neighborhoods,
      stops: route.stops,
      startTime: route.startTime,
      endTime: route.endTime,
    }, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
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
    this.http.delete(environment.backEndGTU_RouteStop + '/routes/' + id,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      }
    )
      .subscribe((res) => {
        console.log('Route deleted from backend:', res);
        this.routes.update((prev) => prev.filter((item) => item.id !== id));
      });
  }

  routeSelectedToEdit(route: Routes) {
    console.log('there', route)
    this.routeToEdit.set(route);
    this.neighborhoodsService.neighborhoodsSelected.set(
      this.neighborhoodsService.neighborhoods().filter((neighborhood) =>
        route.neighborhoods.some((item) => item === neighborhood.id)
      )
    );

    this.stopsService.stopsSelected.set(
      this.stopsService.stops().filter((stop) =>
        route.stops.some((item) => item === stop.id)
      )
    );
    console.log('route to edit:', this.routeToEdit())
  }

  editRoute(form: Record<string, string>) {
    const route = this.mapRecordFormToRoute(form);
    console.log('route to edit:', route);
    this.routeToEdit.set(route);
    this.http.put<RoutesResponse>(environment.backEndGTU_RouteStop + '/routes/' + route.id, {
      id: this.routeToEdit()!.id,
      name: this.routeToEdit()!.name,
      description: this.routeToEdit()!.description,
      neighborhoodIds: this.routeToEdit()!.neighborhoods,
      stops: this.routeToEdit()!.stops,
      startTime: this.routeToEdit()!.startTime,
      endTime: this.routeToEdit()!.endTime,
    },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      }).subscribe((res) => {
        console.log('Route edited in backend:', res);
        if (!Array.isArray(res.data)) {
          const mapper = GtuMapper.mapDataRoutesToRoutes(res.data);
          this.routes.update((prev) => prev.map((item) => item.id === mapper.id ? mapper : item));
        }
        console.log('All routes:', this.routes());

      })
  }
}
