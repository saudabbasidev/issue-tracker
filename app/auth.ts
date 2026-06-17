import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { CheckUser } from "@/app/libs/server.action";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials: any) {
        let user = null;
        user = await CheckUser(credentials);
        const { password } = credentials;
        if (!user) throw new Error("Invalid Credentials");
        // ADD PASSWORD CHECKER
        const comparepass = await bcrypt.compare(password, user.password);
        
        if (!comparepass) throw new Error("password or email is invalid");

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
});
