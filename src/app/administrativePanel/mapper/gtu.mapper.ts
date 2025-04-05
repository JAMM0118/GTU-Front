import {Neighborhood, Routes, Stops } from "../interfaces/models.interface"
import { DataNeighborhood, DataRoutes, DataStops} from "../interfaces/reponses.interface"

export class GtuMapper{
  static mapDataNeighborhooToNeighborhood(item:  DataNeighborhood): Neighborhood{
    return {
        id: item.id,
        name: item.name,
      }
  }
  static mapDataNeighborhoodToNeighborhoodArray(items : DataNeighborhood[]): Neighborhood[] {
    return items.map(this.mapDataNeighborhooToNeighborhood)
  }
  static mapDataStopsToStops(item: DataStops): Stops{
    return {
        id: item.id,
        name: item.name,
        description: item.description,
        neighborhoodId: item.neighborhoodId,
    }
  }
  static mapDataStopsToStopsArray(items : DataStops[]): Stops[] {
    return items.map(this.mapDataStopsToStops)
  }
  static mapDataRoutesToRoutes(item: DataRoutes): Routes{
    return {
        id: item.id,
        name: item.name,
        description: item.description,
        startTime: item.startTime,
        endTime: item.endTime,
        neighborhoods: item.neighborhoodIds,
        stops: item.stops,
    }
  }
  static mapDataRoutesToRoutesArray(items : DataRoutes[]): Routes[] {
    return items.map(this.mapDataRoutesToRoutes)
  }
}
