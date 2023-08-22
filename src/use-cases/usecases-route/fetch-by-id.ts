import { RouteRepositoryInterface } from "@/domain/repositories/route.repository";
import { Route, RouteProps } from "@/domain/route.entity";

interface FetchByIdOutput extends RouteProps {
  id: string;
}
export class FetchRouteByIdUseCase {
  constructor(private routeRepository: RouteRepositoryInterface) {}

  async execute(input: string): Promise<FetchByIdOutput | undefined> {
    const route = await this.routeRepository.findById(input);

    return route;
  }
}
