import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Yandex({
            clientId: process.env.YANDEX_ID,
            clientSecret: process.env.YANDEX_SECRET
        }),
        // ...add more providers here
    ],
    secret: process.env.SECRET,

    //session: { jwt: false }
/*    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,*/
    /*secret: process.env.SECRET,
    jwt: {
        secret: process.env.JWT_SIGNING_PRIVATE_KEY,

        // You can also specify a public key for verification if using public/private key (but private only is fine)
        // verificationKey: process.env.JWT_SIGNING_PUBLIC_KEY,

        // If you want to use some key format other than HS512 you can specify custom options to use
        // when verifying (note: verificationOptions should include a value for maxTokenAge as well).
        // verificationOptions = {
        //   maxTokenAge: `${maxAge}s`, // e.g. `${30 * 24 * 60 * 60}s` = 30 days
        //   algorithms: ['HS512']
        // },
    },*/
})