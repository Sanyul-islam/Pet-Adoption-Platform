import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { jwt } from "better-auth/plugins";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { betterAuth } from "better-auth";

const client = new MongoClient(process.env.DB_URI);
const db = client.db("pet-home");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
    },
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
  session:{
    cookieCache: {
        enabled: true,
        strategy: "jwt",
        maxAge : 7*24*60*60, // in second
    }
  },
  plugins: [jwt()],
});
