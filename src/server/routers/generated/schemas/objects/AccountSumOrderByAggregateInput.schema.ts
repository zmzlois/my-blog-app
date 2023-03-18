/* eslint-disable */
import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<
  Omit<
    Prisma.AccountSumOrderByAggregateInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    expires_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AccountSumOrderByAggregateInputObjectSchema = Schema;
