import { z } from 'zod';


export const loginSchema = z.object({

  email: z.string().email(),

  password: z.string(),

  remember: z.boolean().optional(),

});

export const RegisterSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  user: z.string(),
  password: z.string(),
  confirm_password: z.string(),
});