import { Position, Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

interface CreateRouteInput {
  title: string;
  startPosition: Position;
  endPosition: Position;
  path?: Position[];
}

interface CreateRouteOutput {
  title: string;
  startPosition: Position;
  endPosition: Position;
  path?: Position[];
}

export class CreateRouteUseCase {
  constructor(private routeRepository: RouteRepositoryInterface) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = new Route(input);
    await this.routeRepository.insert(route);
    return route.toJSON();
  }
}
