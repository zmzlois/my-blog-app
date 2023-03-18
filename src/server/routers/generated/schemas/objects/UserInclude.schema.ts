/* eslint-disable */
import { z } from "zod";
import { PostSchema } from "../Post.schema";
import { AccountSchema } from "../Account.schema";
import { SessionSchema } from "../Session.schema";
import { UserCountOutputTypeArgsObjectSchema } from "./UserCountOutputTypeArgs.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<
  Omit<Prisma.UserInclude, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    posts: z.union([z.boolean(), z.lazy(() => PostSchema.findMany)]).optional(),
    accounts: z
      .union([z.boolean(), z.lazy(() => AccountSchema.findMany)])
      .optional(),
    sessions: z
      .union([z.boolean(), z.lazy(() => SessionSchema.findMany)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserIncludeObjectSchema = Schema;
