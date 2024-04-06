import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const profileRouter = createTRPCRouter({
  getProfile: protectedProcedure.query(({ ctx }) => {
    // Retrieve the user's profile from the database, find the user ID from the session
    const user = ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
    });

    // 
  return user;
}),

updateProfile: protectedProcedure
  .input(z.object({ name: z.string().min(1) }))
  .mutation(async ({ ctx, input }) => {
    // Update the user's profile in the database
    const updatedProfile = await ctx.db.user.update({
      where: { id: ctx.session.user.id },
      data: { name: input.name },
    });

    return updatedProfile;
  }),
});
