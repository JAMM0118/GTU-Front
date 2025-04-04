import {Neighborhood, Stops } from "../interfaces/models.interface"
import { DataNeighborhood, DataStops} from "../interfaces/reponses.interface"

export class GtuMapper{
  static mapDataResponseToMyModel(item: Neighborhood | Stops): any{
    return {
        id: item.id,
        name: item.name,
    }

  }

  static mapDataResponsesToMyModelArray(items : DataNeighborhood[] | DataStops[]): any {
    return items.map(this.mapDataResponseToMyModel)
  }
}
