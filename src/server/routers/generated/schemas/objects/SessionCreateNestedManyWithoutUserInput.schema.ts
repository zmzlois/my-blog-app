/* eslint-disable */
import { z } from "zod";
import { SessionCreateWithoutUserInputObjectSchema } from "./SessionCreateWithoutUserInput.schema";
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from "./SessionUncheckedCreateWithoutUserInput.schema";
import { SessionCreateOrConnectWithoutUserInputObjectSchema } from "./SessionCreateOrConnectWithoutUserInput.schema";
import { SessionWhereUniqueInputObjectSchema } from "./SessionWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<
  Omit<
    Prisma.SessionCreateNestedManyWithoutUserInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => SessionCreateWithoutUserInputObjectSchema),
        z.lazy(() => SessionCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const SessionCreateNestedManyWithoutUserInputObjectSchema = Schema;
