/* eslint-disable */
import { z } from "zod";
import { SessionWhereUniqueInputObjectSchema } from "./SessionWhereUniqueInput.schema";
import { SessionUpdateWithoutUserInputObjectSchema } from "./SessionUpdateWithoutUserInput.schema";
import { SessionUncheckedUpdateWithoutUserInputObjectSchema } from "./SessionUncheckedUpdateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<
  Omit<
    Prisma.SessionUpdateWithWhereUniqueWithoutUserInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => SessionUpdateWithoutUserInputObjectSchema),
      z.lazy(() => SessionUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
