import { RouteInMemoryRepository } from "@/infra/in-memory/route-in-memory.repository";
import { CreateRouteUseCase } from "../create";

describe("Create UseCase Route", () => {
  it("should create a route", async () => {
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

    expect(output).toMatchObject({
      title: "Rota",
      startPosition: {
        latitude: 0,
        longitude: 0,
      },
      endPosition: {
        latitude: 0,
        longitude: 0,
      },
      points: [],
    });
    expect(routeRepository.items).toHaveLength(1);
  });
});
