import { RouteInMemoryRepository } from "@/infra/in-memory/route-in-memory.repository";
import { CreateRouteUseCase } from "../create";
import { DeleteRouteUseCase } from "../delete";
import { FetchAllRouteUseCase } from "../fetch-all";

describe("DeleteRouteUseCase", () => {
  it("should delete a route", async () => {
    const routeRepository = new RouteInMemoryRepository();
    const createRouteUseCase = new CreateRouteUseCase(routeRepository);

    for (let i = 0; i < 3; i++) {
      await createRouteUseCase.execute({
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
    }

    const output = await new FetchAllRouteUseCase(routeRepository);
    const receivedRoutes = await output.execute();

    expect(receivedRoutes).toHaveLength(3);

    const elementToDelete = receivedRoutes[0].id;
    const deleteRouteUseCase = new DeleteRouteUseCase(routeRepository);

    await deleteRouteUseCase.execute(elementToDelete);
    const receivedRoutesAfterDelete = await output.execute();
    expect(receivedRoutesAfterDelete).toHaveLength(2);
  });
});
