import { Route } from "../../domain/route.entity";
import { RouteRepositoryInterface } from "../../domain/repositories/route.repository";

export class RouteInMemoryRepository implements RouteRepositoryInterface {
  items: Route[] = [];

  async insert(route: Route): Promise<void> {
    this.items.push(route);
  }

  async findAll(): Promise<Route[]> {
    return this.items;
  }

  async findById(id: string): Promise<Route | undefined> {
    return this.items.find((route) => route.id === id);
  }

  async delete(id: string): Promise<Route | undefined> {
    const itemToBeDeleted = this.items.find((route) => route.id === id);
    const newItems = this.items.filter((route) => route.id !== id);
    this.items = newItems;
    return itemToBeDeleted;
  }

  async update(id: string, route: Route): Promise<Route> {
    const index = this.items.findIndex((item) => item.id === id);
    this.items[index] = route;
    return this.items[index];
  }
}
