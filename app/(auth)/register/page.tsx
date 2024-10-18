import { Metadata } from 'next'
import RegisterForm from '@/components/screens/RegisterForm'
import { useRouter } from 'next/router';

export const metadata: Metadata = {
    title: 'Register',
    description: 'This component is for register on my app'
}

export default function RegisterPage() {
    return <RegisterForm />; 
}
