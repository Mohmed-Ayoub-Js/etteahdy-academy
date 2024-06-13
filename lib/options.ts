import { type AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

export const options : AuthOptions  = {
    providers:[
        Google({
            clientId:process.env.CLIENT_ID as string,
            clientSecret:process.env.CLEINT_SECERT as string,
        })
      ],
      session : {
        strategy:'jwt',
        maxAge:  1 * 24 * 60 * 60,
      },
      secret: process.env.NEXTSRCERT,
}