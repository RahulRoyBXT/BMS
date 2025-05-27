import {z} from 'zod'

export const userUpdateSchema = z.object({
    name: z.string().min(1, { message: "Name must be at least 1 character long" }).optional(),
    email: z.string().email().min(1, {message: 'Email must be at least 1 character'}).optional()
})

export type UserUpdateType = z.infer<typeof userUpdateSchema>

// Register Schema

export const loginSchema = z.object({
    email: z.string()
        .min(8, 'At least 8 Character required')
        .regex(/[a-z]/, 'Email must contain at least one lowercase letter'),
    password: z.string()
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
})

export type LoginType = z.infer<typeof loginSchema>

export const registerSchema = loginSchema.extend({
    confirmPassword : z.string()
}).refine((data)=> data.password === data.confirmPassword, {
    message: 'Password Does not match',
    path:["confirmPassword"]
})

export type RegisterType = z.infer<typeof registerSchema>