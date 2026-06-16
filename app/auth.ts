import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { CheckUser } from "@/app/libs/server.action";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
     async authorize(credentials){
        let user=null;
        user= await CheckUser(credentials);
        if (!user) throw new Error("Invalid Credentials");

        return user
      },
    }),
  ],
});
