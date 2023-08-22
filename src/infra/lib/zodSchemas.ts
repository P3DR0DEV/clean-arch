import { z } from "zod";

export const createRouteSchema = z.object({
  title: z.string(),
  startPosition: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  endPosition: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  points: z
    .array(z.object({ latitude: z.number(), longitude: z.number() }))
    .optional(),
});
