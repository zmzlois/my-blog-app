/* eslint-disable */
import { z } from "zod";
import { UserArgsObjectSchema } from "./UserArgs.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<
  Omit<Prisma.SessionInclude, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  })
  .strict();

export const SessionIncludeObjectSchema = Schema;
