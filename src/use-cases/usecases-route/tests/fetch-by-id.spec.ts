import { RouteInMemoryRepository } from "@/infra/in-memory/route-in-memory.repository";
import { CreateRouteUseCase } from "../create";
import { FetchRouteByIdUseCase } from "../fetch-by-id";

describe("Fetch by id UseCase Route", () => {
  it("should return a single route", async () => {
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

    const fetchRouteByIdUseCase = new FetchRouteByIdUseCase(routeRepository);

    const route = await fetchRouteByIdUseCase.execute(output.id);

    expect(route).toMatchObject(output);
  });
});
