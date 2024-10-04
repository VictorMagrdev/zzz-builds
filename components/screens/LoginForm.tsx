'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/validators/schemas';
import { z } from 'zod';

import './login.css';

type IFormInput = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: zodResolver(loginSchema),
        mode: 'onBlur',
        reValidateMode: 'onChange',
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    className='text-black'
                    id='email'
                    type="email"
                    {...register('email')}
                />
                <div className='text-xs text-red-400'>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    className='text-black'
                    id='password' 
                    type="password"
                    {...register('password')}
                />
                <div className='text-xs text-red-400'>{errors.password?.message}</div>
            </div>
            <label htmlFor="rememberme">
                <div>
                    <span>Remember me</span>
                    <input
                        type="checkbox"
                        {...register('remember')}
                    />
                </div>
            </label>
            <button type="submit">Login</button>
        </form>
    );
}
