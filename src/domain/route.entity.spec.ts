import { Position, Route, RouteProps } from "./route.entity";

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

  test("Update Position", () => {
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
    const startPosition = {
      latitude: 10,
      longitude: 10,
    };
    const endPosition = {
      latitude: 20,
      longitude: 20,
    };
    route.updatePosition(startPosition, endPosition);
    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });

  test("Update Points", () => {
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

    const points: Position[] = [
      {
        latitude: 10,
        longitude: 10,
      },
      {
        latitude: 20,
        longitude: 20,
      },
    ];
    route.updatePoints(points);
    expect(route.points).toStrictEqual(points);
    expect(route.points).toHaveLength(2);
  });
});
