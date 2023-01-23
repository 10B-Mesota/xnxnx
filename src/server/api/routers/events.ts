import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const eventRouter = createTRPCRouter({
  createEvent: publicProcedure.input(z.object({})).mutation(() => {

  })
});
