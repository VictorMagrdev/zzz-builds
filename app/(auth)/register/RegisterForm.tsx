'use client';

import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useFormState } from 'react-dom';
import { register } from '@/other/actions';
import { RegisterSchema } from '@/other/schemas';

export default function RegisterForm() {
    const [lastResult, action] = useFormState(register, undefined);
    const [form, fields] = useForm({
        lastResult,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: RegisterSchema});
        },
        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput',
    });

    return (
        <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate className="flex flex-col p-5 rounded-2xl border border-gray-400">
        <div className="flex flex-col">
            <label htmlFor="user">Name</label>
            <input
                className="text-black"
                id="name"
                type="text"
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={fields.name.initialValue} 
            />
            <div className="text-xs text-red-400">{fields.name.errors}</div>
        </div>
        
        <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
                className="text-black"
                id="email"
                type="email"
                key={fields.email.key}
                name={fields.email.name}
                defaultValue={fields.email.initialValue} 
            />
            <div className="text-xs text-red-400">{fields.email.errors}</div>
        </div>
        
        <div className="flex flex-col">
            <label htmlFor="user">User</label>
            <input
                className="text-black"
                id="user"
                type="text"
                key={fields.user.key}
                name={fields.user.name}
                defaultValue={fields.user.initialValue} 
            />
            <div className="text-xs text-red-400">{fields.user.errors}</div>
        </div>
        
        <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
                className="text-black"
                id="password" 
                type="password"
                key={fields.password.key}
                name={fields.password.name}
                defaultValue={fields.password.initialValue}
            />
            <div className="text-xs text-red-400">{fields.password.errors}</div>
        </div>
        
        <div className="flex flex-col">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
                className="text-black"
                id="confirm_password" 
                type="password"
                key={fields.confirm_password.key}
                name={fields.confirm_password.name}
                defaultValue={fields.confirm_password.initialValue}
            />
            <div className="text-xs text-red-400">{fields.confirm_password.errors}</div>
        </div>
        
        <div className="flex flex-col">
            <input type="submit" value="register" />
        </div>
    </form>    
    )
}
