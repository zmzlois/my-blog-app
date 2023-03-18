/* eslint-disable */
import { z } from "zod";
import { UserCreateNestedOneWithoutSessionsInputObjectSchema } from "./UserCreateNestedOneWithoutSessionsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<
  Omit<Prisma.SessionCreateInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    id: z.string().optional(),
    sessionToken: z.string(),
    expires: z.date(),
    user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputObjectSchema),
  })
  .strict();

export const SessionCreateInputObjectSchema = Schema;
