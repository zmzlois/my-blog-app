/* eslint-disable */
import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<
  Omit<
    Prisma.NullableDateTimeFieldUpdateOperationsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    set: z.date().optional().nullable(),
  })
  .strict();

export const NullableDateTimeFieldUpdateOperationsInputObjectSchema = Schema;
