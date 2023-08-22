import { RouteInMemoryRepository } from "@/infra/in-memory/route-in-memory.repository";
import { FetchAllRouteUseCase } from "./fetch-all";
import { CreateRouteUseCase } from "./create";

describe("Fetch all UseCase Route", () => {
  it("should return all routes", async () => {
    const routeRepository = new RouteInMemoryRepository();
    const createRouteUseCase = new CreateRouteUseCase(routeRepository);
    const output = await createRouteUseCase.execute({
      title: "Rota",
      startPosition: {
        latitude: 0,
        longitude: 0,
      },
      endPosition: {
        latitude: 0,
        longitude: 0,
      },
    });
    const findAllRouteUseCase = new FetchAllRouteUseCase(routeRepository);
    const routes = await findAllRouteUseCase.execute();

    expect(routes).toHaveLength(1);
  });
});
