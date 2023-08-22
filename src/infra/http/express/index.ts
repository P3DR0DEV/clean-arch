import express, { Express, Request, Response } from "express";
import { RouteInMemoryRepository } from "@/infra/in-memory/route-in-memory.repository";
import { CreateRouteUseCase } from "@/application/create-route.use-case";
import { createRouteSchema } from "@/infra/lib/zodSchemas";

const app: Express = express();
const inMemoRepository = new RouteInMemoryRepository();

app.use(express.json());
app.post("/routes", async (req: Request, res: Response) => {
  try {
    const requestBodyShape = createRouteSchema.parse(req.body);

    const createRouteUseCase = new CreateRouteUseCase(inMemoRepository);

    const response = await createRouteUseCase.execute(requestBodyShape);

    if (response) return res.status(201).json(response);

    throw new Error();
  } catch (error) {
    return res.status(400).json(error);
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
