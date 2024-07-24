import { helloRouter } from './router/hello';
import { wakatimeRouter } from './router/wakatime';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  hello: helloRouter,
  wakatime: wakatimeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
