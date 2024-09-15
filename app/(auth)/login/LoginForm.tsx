'use client';

import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useFormState } from 'react-dom';
import { login } from '@/other/actions';
import { loginSchema } from '@/other/schemas';

import './style.css'


export default function LoginForm() {
    const [lastResult, action] = useFormState(login, undefined);
    const [form, fields] = useForm({
        lastResult,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: loginSchema});
        },
        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput',
    });

    return (
        <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    className='text-black'
                    id='email'
                    type="email"
                    key={fields.email.key}
                    name={fields.email.name}
                    defaultValue={fields.email.initialValue} 
                />
                <div className='text-xs text-red-400'>{fields.email.errors}</div>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    className='text-black'
                    id='password' 
                    type="password"
                    key={fields.password.key}
                    name={fields.password.name}
                    defaultValue={fields.password.initialValue}
                />
                <div className='text-xs text-red-400'>{fields.password.errors}</div>
            </div>
            <label htmlFor="rememberme">
                <div>
                    <span>Remember me</span>
                    <input
                        type="checkbox"
                        key={fields.remember.key}
                        name={fields.remember.name}
                        defaultChecked={fields.remember.initialValue === 'on'} 
                    />
                </div>
            </label>
            <button>Login</button>
        </form>
    )
}
