// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: "https://57e8cf1bf63ef93a96eef72ac0808c67@o4508568179900416.ingest.us.sentry.io/4508568289280000",
  
    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,
  
    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });
}
