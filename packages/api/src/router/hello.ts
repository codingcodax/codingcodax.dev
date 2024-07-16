import type { TRPCRouterRecord } from '@trpc/server';
import { z } from 'zod';

import { publicProcedure } from '../trpc';

export const helloRouter = {
  greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `hello ${input.name}`;
    }),
} satisfies TRPCRouterRecord;
