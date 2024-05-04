import { z } from 'zod';

import { createTRPCRouter, protectedProcedure } from '../trpc';

export const profilePictureRouter = createTRPCRouter({
  getGiphyProfilePictureURL: protectedProcedure.query(({ ctx }) => {
    return ctx.db.profilePicture.findFirst({
      where: { createdBy : { id: ctx.session.user.id } },
    });
  }),

  setProfilePictureURL: protectedProcedure
  .input(z.object({ url: z.string().min(1) }))
  .mutation(async ({ ctx, input }) => {
    return ctx.db.profilePicture.create({
      data: {
        createdBy: { connect: { id: ctx.session.user.id } },
        url: input.url
      },
    });
  }),
})