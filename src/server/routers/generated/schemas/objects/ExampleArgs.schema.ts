/* eslint-disable */
import { z } from "zod";
import { ExampleSelectObjectSchema } from "./ExampleSelect.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<
  Omit<Prisma.ExampleArgs, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    select: z.lazy(() => ExampleSelectObjectSchema).optional(),
  })
  .strict();

export const ExampleArgsObjectSchema = Schema;
