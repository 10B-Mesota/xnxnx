import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

const event = z.object({
  name: z.string(),
  description: z.string(),
  photo_link: z.string(),
});

const user = z.object({
  first_name: z.string(),
  last_name: z.string(),
});

export const eventRouter = createTRPCRouter({
  createEvent: publicProcedure
    .input(z.object({ event }))
    .mutation(async ({ ctx, input }) => {
      const event = await ctx.prisma.event.create({
        data: {
          name: input.event.name,
          details: input.event.description,
          photo_link: input.event.photo_link,
        },
      });

      return event;
    }),
  addParticipantToEvent: publicProcedure
    .input(z.object({ event_name: z.string(), user }))
    .mutation(async ({ ctx, input }) => {
      const event = ctx.prisma.event.update({
        where: {
          name: input.event_name,
        },
        data: {
          participants: {
            create: {
              first_name: input.user.first_name,
              last_name: input.user.last_name,
            },
          },
        },
      });

      return event;
    }),
  getEvents: publicProcedure.query(async ({ ctx }) => {
    const events = ctx.prisma.event.findMany({
      select: {
        name: true,
        participants: true,
        details: true,
        photo_link: true,
      },
    });

    return events;
  }),
});
