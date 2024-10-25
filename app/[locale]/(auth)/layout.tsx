import './layout.css'
import AuthBackground from '@/assets/images/auth-background.webp'
import Image from 'next/image';
export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className='auth'>
            <Image
                src={AuthBackground}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}
                alt="auth-background"
                className='auth-background'
            />
            <section>
                
            </section>
        <section>
            {children}
        </section>
        </main>
    );
}