import * as authSchema from "./auth-schema";
import * as businessSchema from "./business-schema";

export const schema = {
  ...authSchema,
  ...businessSchema,
};