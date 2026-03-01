//IS GLOBALIZED whenever we want to use we can use importing this file and using using the ENV variable.

import dotenv from "dotenv";

dotenv.config({quiet:true});
export const ENV= {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
  INNGEST_SIGNING_KEY:INNGEST_SIGNING_KEY,
  INNGEST_EVENT_KEY:INNGEST_EVENT_KEY,
  STREAM_API_SECRET:STREAM_API_SECRET,
  STREAM_API_KEY:STREAM_API_KEY,
  CLERK_PUBLISHABLE_KEY:CLERK_PUBLISHABLE_KEY,

};