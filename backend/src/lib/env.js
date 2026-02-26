//IS GLOBALIZED whenever we want to use we can use importing this file and using using the ENV variable.

import dotenv from "dotenv";

dotenv.config();
export const ENV= {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
};