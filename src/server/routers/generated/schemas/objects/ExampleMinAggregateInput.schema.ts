/* eslint-disable */
import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<
  Omit<
    Prisma.ExampleMinAggregateInputType,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const ExampleMinAggregateInputObjectSchema = Schema;
