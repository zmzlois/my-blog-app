/* eslint-disable */
import { ExampleSchema } from "./Example.schema";
import { AccountSchema } from "./Account.schema";
import { SessionSchema } from "./Session.schema";
import { UserSchema } from "./User.schema";
import { VerificationTokenSchema } from "./VerificationToken.schema";
import { PostSchema } from "./Post.schema";

const schemas = {
  Example: ExampleSchema,
  Account: AccountSchema,
  Session: SessionSchema,
  User: UserSchema,
  VerificationToken: VerificationTokenSchema,
  Post: PostSchema,
};

export default schemas;
