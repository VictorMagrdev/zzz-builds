'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/validators/schemas';
import { z } from 'zod';
import { bg_blue_30 } from '@/components/tokens';

import { registerUser, loginUser } from '@/libs/api_general';
import useStore from '@/store/useStore';
import { useRouter } from 'next/navigation';

type IFormInput = z.infer<typeof RegisterSchema>;


export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: zodResolver(RegisterSchema),
        mode: 'onBlur',
        reValidateMode: 'onChange',
    });
    const router = useRouter();
    const { login } = useStore();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            const result = await registerUser(data.name, data.user, data.email, data.password, data.confirm_password);
            const loginResult:any = await loginUser(data.email, data.password); 
            localStorage.setItem('token', loginResult.token);
            login(loginResult.token);
            router.push('/');
        } catch (error: any) {
            console.error('Error al registrarse:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className={`flex flex-col p-5 rounded-2xl ${bg_blue_30}`}>
            <div className="flex flex-col">

                <label className="text-white mb-1" htmlFor="name">Name</label>
                <input
                    className="text-black"
                    id="name"
                    type="text"
                    {...register('name')}
                />
                <div className="text-xs text-red-400">{errors.name?.message}</div>
            </div>

            <div className="flex flex-col">

                <label className="text-white mb-1" htmlFor="email">Email</label>
                <input
                    className="text-black"
                    id="email"
                    type="email"
                    {...register('email')}
                />
                <div className="text-xs text-red-400">{errors.email?.message}</div>
            </div>

            <div className="flex flex-col">

                <label className="text-white mb-1" htmlFor="user">User</label>
                <input
                    className="text-black"
                    id="user"
                    type="text"
                    {...register('user')}
                />
                <div className="text-xs text-red-400">{errors.user?.message}</div>
            </div>

            <div className="flex flex-col">

                <label className="text-white mb-1" htmlFor="password">Password</label>

                <input
                    className="text-black"
                    id="password" 
                    type="password"
                    {...register('password')}
                />
                <div className="text-xs text-red-400">{errors.password?.message}</div>
            </div>

            <div className="flex flex-col">

                <label className="text-white mb-1" htmlFor="confirm_password">Confirm Password</label>

                <input
                    className="text-black"
                    id="confirm_password" 
                    type="password"
                    {...register('confirm_password')}
                />
                <div className="text-xs text-red-400">{errors.confirm_password?.message}</div>
            </div>

            <div className="flex flex-col">

                <input className="text-white mb-1" type="submit" value="Register" />
            </div>
        </form>
    );
}