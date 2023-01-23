import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

const event = z.object({
  name: z.string(),
  description: z.string(),
})

export const eventRouter = createTRPCRouter({
  createEvent: publicProcedure.input(z.object({event, })).mutation(({ctx, input}) => {


  })
});
