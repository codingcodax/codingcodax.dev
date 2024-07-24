import type { TRPCRouterRecord } from '@trpc/server';

import { getTime } from './getTime';

export const wakatimeRouter = {
  getTime,
} satisfies TRPCRouterRecord;
