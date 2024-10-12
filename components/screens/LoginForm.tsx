'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/validators/schemas';
import { z } from 'zod';

import { useEffect, useState } from 'react';
import { loginUser } from '@/libs/api_general';
import useStore from '@/store/useStore';
import { useRouter } from 'next/navigation';
import './login.css';

type IFormInput = z.infer<typeof loginSchema>;
interface User {
    name: string;
    user: string;
    email: string;
    password: string;
    confirmPassword: string;
    token: string;
}

export default function LoginForm() { 
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: zodResolver(loginSchema),
        mode: 'onBlur',
        reValidateMode: 'onChange',
    });


    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const login = useStore((store) => store.login);
    const token = useStore((store) => store.token);
    const router = useRouter()
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        setLoading(true);
        setErrorMessage('');

        try {
            const result:any = await loginUser(data.email, data.password);
            localStorage.setItem('token', result.token);
            login(result.token);
            console.log(token)
            router.push('/');
        } catch (error: any) {
            setErrorMessage(error.response?.data?.message || error.message || 'Error desconocido');
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        console.log(token)
    }, [token])
    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>

            {errorMessage && <div className="text-red-400">{errorMessage}</div>}

            <div>
                <label className='text-white my-1' htmlFor="email">Email</label>
                <input
                    className='text-black'
                    id='email'
                    type="email"
                    {...register('email')}

                    aria-invalid={errors.email ? "true" : "false"}
                />
                <div className='text-xs text-red-400'>{errors.email?.message}</div>
            </div>
            <div>
                <label className='text-white my-1' htmlFor="password">Password</label>
                <input
                    className='text-black'
                    id='password'
                    type="password"
                    {...register('password')}

                    aria-invalid={errors.password ? "true" : "false"}
                />
                <div className='text-xs text-red-400'>{errors.password?.message}</div>
            </div>
            <label className='text-white my-1 text-xs' htmlFor="rememberme">
                <div>
                    <span>Remember me</span>
                    <input
                        type="checkbox"
                        {...register('remember')}
                    />
                </div>
            </label>

            <button className='text-white' type="submit" disabled={loading}>
                {loading ? 'Loading...' : 'Login'}
            </button>
        </form>
    );
}
