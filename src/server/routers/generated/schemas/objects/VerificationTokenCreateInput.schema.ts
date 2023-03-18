/* eslint-disable */
import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<
  Omit<
    Prisma.VerificationTokenCreateInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    identifier: z.string(),
    token: z.string(),
    expires: z.date(),
  })
  .strict();

export const VerificationTokenCreateInputObjectSchema = Schema;
