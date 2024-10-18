'use server'; // action.ts


import { redirect } from 'next/navigation';

import { parseWithZod } from '@conform-to/zod';
import { loginSchema, RegisterSchema } from '../validators/schemas';


export async function login(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: loginSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }
  redirect('/account');
}

export async function register(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: RegisterSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }
  redirect('/account');
}