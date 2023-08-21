import { Route, RouteProps } from "./route.entity";

describe("Route test", () => {
  test("constructor", () => {
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
    let route = new Route(routeProps);
    expect(route.props).toStrictEqual({ ...routeProps, points: [] });

    routeProps = {
      title: "Rota",
      startPosition: {
        latitude: 0,
        longitude: 0,
      },
      endPosition: {
        latitude: 0,
        longitude: 0,
      },
      points: [
        {
          latitude: 10,
          longitude: 10,
        },
      ],
    };
    route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [
        {
          latitude: 10,
          longitude: 10,
        },
      ],
    });
  });

  test("Update title", () => {
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
    let route = new Route(routeProps);
    route.updateTitle("Nova Rota");
    expect(route.title).toBe("Nova Rota");
  });
});
