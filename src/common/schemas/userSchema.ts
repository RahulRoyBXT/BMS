import {z} from 'zod'

export const userUpdateSchema = z.object({
    name: z.string().min(1, { message: "Name must be at least 1 character long" }).optional(),
    email: z.string().email().min(1, {message: 'Email must be at least 1 character'}).optional()
})

export type UserUpdateType = z.infer<typeof userUpdateSchema>