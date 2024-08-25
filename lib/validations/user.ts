import * as z from "zod"

export const userSchema= z.object({
    profile_photo: z.string().url().min(1),
    name : z.string().min(3).max(30),
    username: z.string().min(4).max(15),
    bio : z.string().min(5).max(300)

})