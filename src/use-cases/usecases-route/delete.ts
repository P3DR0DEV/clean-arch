import { RouteRepositoryInterface } from "@/domain/repositories/route.repository";

export class DeleteRouteUseCase {
  constructor(private routeRepository: RouteRepositoryInterface) {}

  async execute(id: string): Promise<void> {
    await this.routeRepository.delete(id);
  }
}
