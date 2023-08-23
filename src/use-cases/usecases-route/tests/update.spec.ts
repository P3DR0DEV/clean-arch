import { RouteInMemoryRepository } from "@/infra/in-memory/route-in-memory.repository";
import { CreateRouteUseCase } from "../create";
import { UpdateRouteUseCase } from "../update";
import { FetchAllRouteUseCase } from "../fetch-all";
import { Route } from "@/domain/route.entity";

describe("Shoul Update one Route", () => {
  it("should update a route", async () => {
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
    const existingRoutes = new FetchAllRouteUseCase(routeRepository);
    const routeToBeupdated = await existingRoutes.execute();

    const updateRouteUseCase = new UpdateRouteUseCase(routeRepository);

    const routeUpdateBody = {
      title: "Rota",
      startPosition: {
        latitude: 0,
        longitude: 0,
      },
      endPosition: {
        latitude: 0,
        longitude: 0,
      },
      points: [{ latitude: 0, longitude: 0 }],
    } as Route;

    const updatedRoute = await updateRouteUseCase.execute(
      routeToBeupdated[0].id,
      routeUpdateBody
    );

    expect(updatedRoute).toMatchObject(routeUpdateBody);
  });
});
