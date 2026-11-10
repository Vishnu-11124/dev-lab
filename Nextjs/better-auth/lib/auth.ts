import { betterAuth } from "better-auth";

export const auth = betterAuth({
    database: "",
    emailAndPassword: {
        enabled: true
    },
    socialProviders:{
        github:{
            clientId: "",
            clientSecret: ""
        },
        google:{
            clientId: "",
            clientSecret: ""
        }
    }
})