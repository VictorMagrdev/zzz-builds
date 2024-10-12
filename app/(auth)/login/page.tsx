import { Metadata } from 'next';
import LoginForm from '@/components/screens/LoginForm';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Login',
    description: 'This component is for login on my app',
};

export default function LoginPage() {
  return <LoginForm/>;
}