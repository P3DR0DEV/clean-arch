import { RouteRepositoryInterface } from "@/domain/repositories/route.repository";
import { Route } from "@/domain/route.entity";

export class UpdateRouteUseCase {
  constructor(private routeRepository: RouteRepositoryInterface) {}

  async execute(id: string, route: Route): Promise<Route> {
    return this.routeRepository.update(id, route);
  }
}
