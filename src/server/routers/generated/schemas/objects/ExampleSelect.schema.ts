/* eslint-disable */
import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<
  Omit<Prisma.ExampleSelect, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict();

export const ExampleSelectObjectSchema = Schema;
