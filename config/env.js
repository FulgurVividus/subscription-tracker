import { config } from "dotenv";

// this will extract all environment variables and then you can export them from this file
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, NODE_ENV } = process.env;
