import { RouteRepositoryInterface } from "@/domain/repositories/route.repository";
import { Route } from "@/domain/route.entity";

export class DeleteRouteUseCase {
  constructor(private routeRepository: RouteRepositoryInterface) {}

  async execute(id: string): Promise<Route | undefined> {
    const deletedRoute = await this.routeRepository.delete(id);
    return deletedRoute;
  }
}
