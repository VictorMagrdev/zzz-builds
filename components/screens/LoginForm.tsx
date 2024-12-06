'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/validators/schemas';
import { z } from 'zod';
import Cookie from "js-cookie";
import { useEffect, useState } from 'react';
import { loginUser } from '@/libs/api_general';
import useStore from '@/store/useStore';
import { useRouter } from 'next/navigation';
import './login.css';
import { useTranslations } from 'next-intl';

type IFormInput = z.infer<typeof loginSchema>;

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
            
            const currentUser = Cookie.get("token");
            console.log('cookie',currentUser);
            login(result.token);
            console.log(token)
            router.push('/profile');
        } catch (error: any) {
            setErrorMessage(error.response?.data?.message || error.message || 'Error desconocido');
        } finally {
            setLoading(false);
        }

    };

    const t = useTranslations("login_form");

    useEffect(() => {
        console.log(token)
    }, [token])
    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>

            {errorMessage && <div className="text-red-400">{t("error_message")}</div>}

            <div>
                <label className='text-white my-1' htmlFor="email">{t("email_label")}</label>
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
                <label className='text-white my-1' htmlFor="password">
                    {t("password_label")}
                </label>
                    <input
                        className='text-black'
                        id='password'
                        type="password"
                        {...register('password')}
                        aria-invalid={errors.password ? "true" : "false"}
                        aria-describedby={errors.password ? "password-error" : undefined}
                    />
                    {errors.password && (
                        <div id="password-error" className='text-xs text-red-400'>
                        {t("password_error")}
                        </div>
                    )}
            </div>


            <button className='text-white' type="submit" disabled={loading}>
                {loading ? t("loading_message") : t("login_button")}
            </button>

        </form>
    );
}