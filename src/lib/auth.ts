import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/db"; // your drizzle instance
import { admin as adminPlugin } from "better-auth/plugins" 
import { ac } from "./rbac/permissions";
import { guest, customer, customer_rep, senior_customer_rep, finance_admin, senior_finance_admin, admin, super_admin, senior_admin, developer } from "./rbac/roles";
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
    }),
    plugins: [adminPlugin({
      ac,
      roles: {
        guest,
        customer,
        customer_rep,
        senior_customer_rep,
        finance_admin,
        senior_finance_admin,
        admin,
        super_admin,
        senior_admin,
        developer,
      }
    })],
    emailAndPassword: {
    enabled: true, 
  },
});