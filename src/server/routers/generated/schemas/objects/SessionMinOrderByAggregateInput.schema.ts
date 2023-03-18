/* eslint-disable */
import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<
  Omit<
    Prisma.SessionMinOrderByAggregateInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sessionToken: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const SessionMinOrderByAggregateInputObjectSchema = Schema;
