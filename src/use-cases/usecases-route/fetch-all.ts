import { RouteRepositoryInterface } from "@/domain/repositories/route.repository";
import { Position } from "@/domain/route.entity";

export interface FetchAllRouteOutput {
  id: string;
  title: string;
  startPosition: Position;
  endPosition: Position;
  points?: Position[];
}

export class FetchAllRouteUseCase {
  constructor(private routeRepository: RouteRepositoryInterface) {}

  async execute(): Promise<FetchAllRouteOutput[]> {
    const routes = await this.routeRepository.findAll();
    return routes.map((route) => route.toJSON());
  }
}
