import { createAccessControl } from "better-auth/plugins/access";
import { defaultStatements, adminAc } from "better-auth/plugins/admin/access";

const statement = {
    session: defaultStatements.session,
  ticket: [
    "view.catalog",            // see ticket categories/classes
    "view.detail",             // view specific ticket type
    "create.booking",          // purchase/checkout
    "update.booking",          // reschedule/change booking
    "cancel.booking",          // customer-initiated cancel
    "override.booking",        // admin/ops force override booking
    "delete.booking",          // permanent delete (admin only)
    "export.bookings",         // download passenger/booking list
    "download.receipt",        // ticket/receipt download
  ],

  cart: [
    "view",                    // view current cart
    "add",                     // add item to cart
    "remove",                  // remove item
    "update",                  // update quantity, ticket class
    "checkout",                // checkout flow
    "apply.voucher.preview",   // preview voucher (guest)
    "apply.voucher",           // apply voucher at checkout
    "clear",                   // clear cart
  ],

  voucher: [
    "view.own",                // customer viewing their vouchers
    "view.detail",             // support viewing voucher info
    "create.purchase",         // buy voucher
    "create.gift",             // buy for another person
    "redeem",                  // redeem voucher
    "partial.redeem",          // redeem partially
    "override.adjust",         // admin adjust balance/expiry
    "delete",                  // revoke voucher
    "export.ledger",           // export voucher transactions
  ],

  schedule: [
    "view.availability",       // see flyable days/sessions
    "view.detail",             // view specific day/session
    "create.own.session",          // add new flight session
    "update.own.session",          // change date, capacity, status
    "update.own.flyable.status",   // mark as flyable/unflyable
    "cancel.own.session",          // cancel session    
    "override.own.session",        // force capacity or overrides
    "create.state.session",          // add new flight session
    "update.state.session",          // change date, capacity, status
    "update.state.flyable.status",   // mark as flyable/unflyable
    "cancel.state.session",          // cancel session    
    "override.state.session",        // force capacity or overrides
    "create.any.session",          // add new flight session
    "update.any.session",          // change date, capacity, status
    "update.any.flyable.status",   // mark as flyable/unflyable
    "cancel.any.session",          // cancel session    
    "override.any.session",        // force capacity or overrides
    "export.manifest",         // export daily manifest
  ],

  profile: [
    "view.own",                // user sees own profile
    "update.own",              // update own profile
    "view.customer",           // ops/finance can view customers
    "view.customer_rep",       // ops/finance can view customer reps
    "view.senior_customer_rep",       // ops/finance can view senior customer reps
    "view.finance_admin",       // ops/finance can view finance admins
    "view.senior_finance_admin",       // ops/finance can view senior finance admins
    "view.admin",              // admin view admin accounts
    "view.senior-admin",       // senior admin profile access
    "view.super-admin",        // super admin profile access
    "delete.own",              // account deletion by customer
  ],

  user: [
    "create.customer_rep",       
    "create.senior_customer_rep",
    "create.finance_admin",     
    "create.senior_finance_admin",     
    "create.admin",     
    "create.senior_admin",
    "create.super_admin",
    "list-admin", "list-customer_rep",
    "list-senior_customer_rep",
    "list-finance_admin", "list-senior_finance_admin",
    "list-admin", 
    "list-senior-admin", 
    "list-super-admin",
    "set-customer_rep",
    "set-senior_customer_rep",
    "set-finance_admin", 
    "set-senior_finance_admin", 
    "set-admin", 
    "set-senior-admin", 
    "set-super-admin", 
    "ban-customer_rep", 
    "ban-senior_customer_rep", 
    "ban-finance_admin", 
    "ban-senior_finance_admin", 
    "ban-admin", 
    "ban-senior-admin",
    "impersonate",
    "delete-customer", 
    "delete-admin", 
    "delete-senior-admin", 
    "set-password-admin", 
    "set-password-senior-admin", 
    "set-password-customer_rep", 
    "set-password-senior_customer_rep", 
    "set-password-finance_admin", 
    "set-password-senior_finance_admin", 
    "update-customer_rep", 
    "update-senior_customer_rep", 
    "update-finance_admin", 
    "update-senior_finance_admin", 
    "update-admin", 
    "update-senior-admin", 
    "update-super-admin"
  ],

  payment: [
    "create.intent",           // initiate payment
    "confirm",                 // confirm payment success
    "refund.request",          // customer refund request
    "refund.approve",          // finance approves refund
    "refund.process",          // finance processes refund
    "reconcile.bank",          // reconcile with bank API
    "view.transaction",        // view transaction history
    "export.transactions",     // export payments
  ],

  notification: [
    "view.own",                // customers see their notifications
    "send.booking.confirmation",// auto/manual send confirmation
    "send.schedule.update",    // notify customers of schedule changes
    "send.voucher.delivery",   // voucher emails/SMS
    "send.manual",             // ops sends manual notifications
    "delete",                  // clear notification
  ],

  catalog: [
    "view",                    // view ticket catalog
    "create",                  // add ticket category/class
    "update",                  // edit catalog
    "delete",                  // remove from catalog
    "manage.pricing",          // set/change ticket pricing
  ],

  audit: [
    "view.logs",               // view all system logs
    "export.logs",             // export logs
    "view.trail",              // detailed audit trail
    "view.security.events",    // view login attempts, failures
  ],

  report: [
    "view.dashboard.customer",          // customer dashboards
    "view.dashboard.admin",          // admin/finance dashboards
    "export.sales",            // export sales data
    "export.customers",        // export customer list
    "export.finance",          // export finance reports
    "export.operations",       // ops performance metrics
  ],

  support_tickets: [
    "view",
    "create",
    "update",
    "delete",
    "assign",
    "escalate",
    "resolve",
    "reopen",
    "export",
  ],

  system: [
    "webhook.listen",          // receive payment/bank webhooks
    "jobs.run",                // execute async jobs
    "jobs.retry",              // retry failed jobs
    "backup.create",           // initiate DB backup
    "backup.restore",          // restore from backup
    "monitor.health",          // check system health/uptime
    "config.manage",           // manage system config/secrets
  ],
};

export const ac = createAccessControl(statement);