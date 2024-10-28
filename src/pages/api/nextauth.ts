// pages/api/auth/[...nextauth].ts

import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { signInSchema } from "../../lib/wavtools/zod"; // Path to the schema
import { saltAndHashPassword } from "../../utils/utils/password"; // Replace with your hashing function
import { getUserFromDb } from "../../db"; // Replace with actual DB call

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;

        try {
          // Validate credentials using Zod
          const { email, password } = await signInSchema.parseAsync(credentials);

          // Hash password (adjust based on your hashing approach)
          const pwHash = saltAndHashPassword(password);

          // Verify user
          const user = await getUserFromDb(email, pwHash);

          // Return user data if valid, otherwise return null
          if (!user) return null;
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            console.error("Validation error:", error.errors);
            return null;
          }
          console.error("Error in authorize:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id ?? ""; // Assign a default if undefined
        token.email = user.email ?? ""; // Assign a default if undefined
      }
      return token;
    },
    async session({ session, token }) {
      if (token && token.id && token.email) {
        session.user = {
          ...session.user,
          id: token.id,
          email: token.email,
        };
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);