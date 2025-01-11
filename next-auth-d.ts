declare module 'next-auth/jwt' {
  interface JWT {
    username?: string;
    userRole?: string;
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
        username?: string;
      userRole?: string;
    }
  }
}
