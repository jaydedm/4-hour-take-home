import { z } from 'zod';

import { createTRPCRouter, protectedProcedure } from '../trpc';

export const profilePictureRouter = createTRPCRouter({
  getProfilePictureURL: protectedProcedure.query(({ ctx }) => {
    return ctx.db.profilePicture.findFirst({
      where: { createdBy : { id: ctx.session.user.id } },
    });
  }),

  setProfilePictureURL: protectedProcedure
  .input(z.object({ url: z.string().min(1) }))
  .mutation(async ({ ctx, input }) => {
    // simulate a slow db call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return ctx.db.profilePicture.create({
      data: {
        createdBy: { connect: { id: ctx.session.user.id } },
        url: input.url
      },
    });
  }),
})