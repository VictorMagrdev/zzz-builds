import { Metadata } from 'next'
import RegisterForm from './RegisterForm'

export const metadata: Metadata = {
    title: 'Register',
    description: 'This component is for register on my app'
}

export default function RegisterPage() {
  return <RegisterForm/>
}
