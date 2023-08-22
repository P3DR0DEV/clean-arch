import { Route, RouteProps } from "../../domain/route.entity";
import { RouteInMemoryRepository } from "./route-in-memory.repository";

describe("RouteInMemoRepository test", () => {
  it("should insert a new route", async () => {
    const repository = new RouteInMemoryRepository();

    let routeProps: RouteProps = {
      title: "Rota",
      startPosition: {
        latitude: 0,
        longitude: 0,
      },
      endPosition: {
        latitude: 0,
        longitude: 0,
      },
    };
    const route = new Route(routeProps);

    await repository.insert(route);
    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  });
});
