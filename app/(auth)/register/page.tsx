import React from 'react'
import './style.css'

export default function page() {
  return (
        <form>
        <div>
                <label htmlFor='name'>name</label>
                <input id='name' type='text'/>
            </div>
            <div>
                <label htmlFor='user'>User</label>
                <input id='user' type='text'/>
            </div>
            <div>
                <label htmlFor='password'>password</label>
                <input id='password' type='text'/>
            </div>
            <div>
                <label htmlFor='confirm_password'>confirm password</label>
                <input id='password' type='text'/>
            </div>
            <div>
                <input type='submit' value='Login'/>
            </div>
        </form>
  )
}
