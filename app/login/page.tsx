import { auth } from '@/app/auth'
import LoginForm from '@/app/components/loginForm'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
    const session = await auth()
 
  if (session?.user) redirect('/dashboard')
 
  return (
    <>
    <main>
        <LoginForm/>
    </main>
    </>
  )
}

export default page