import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import connect from "@/utils/db"
import User from "@/models/User";
import bcrypt from "bcryptjs"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      id:"credentials",
      name:"Credentials",
      async authorize(credentials){
        await connect();
        try {
          const user = await User.findOne({email:credentials.email})
          if(user){
            const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password);
            if(isPasswordCorrect) return user;
            throw new Error("User or password is incorrect")
          }
          else{
            throw new Error("User not Found!")
          }
        } catch (error) {
          throw new Error(error)
        }
      }
    })
  ],
  pages:{
    error:'/dasboard/login'
  }
})
export {handler as GET,handler as POST}