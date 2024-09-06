import React from 'react'
import './style.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Login',
    description: 'This coponent is for login on my app'
}

export default function LoginPage() {
  return (
    <form>
        <div>
            <label htmlFor="user">User</label>
            <input id='user' type="text" />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input id='password' type="password" />
        </div>
        <div>
            <input type="submit" value="login"/>
        </div>
    </form>
  )
}
