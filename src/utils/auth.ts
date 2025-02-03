import bcrypt from 'bcryptjs';
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/connections/connectDB";
import UserM from "@/models/UserM";

const hashedPasswordFa = async (password: string) => {
    const newPassword = await bcrypt.hash(password, 12);
    return newPassword;
}

const checkedPasswordFa = async (password: string, hashedPassword: string) => {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
}

export const authOptions = {
    session: {
        strategy: "jwt" as const,
        updateAge: 24 * 60 * 60,
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { type: "text", label: "username" },
                password: { type: "password", label: "password" },
            },
            async authorize(credentials) {
                try {
                    await connectDB();
                } catch {
                    throw new Error("مشکلی در سمت سرور رخ داده است");
                }

                const { username, password } = credentials as { username: string, password: string };
                if (!username || !password) throw new Error("فرم ورود را کامل پر کنید 😡");
                const user = await UserM.findOne({ username });
                if (!user) throw new Error("نام کاربری یافت نشد !");
                const isValidPassword = await checkedPasswordFa(password, user.password);
                if (!isValidPassword) throw new Error("اطلاعات وارد شده صحیح نیست !");
                return user;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.username = token.username;
            session.user.role = token.role;
            return session;
        }
    },
}

export { hashedPasswordFa, checkedPasswordFa }
