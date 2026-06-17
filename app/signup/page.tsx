import { auth } from '@/app/auth'
import SignupForm from '@/app/components/signupform'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
    const session=await auth()
    if(session?.user) redirect('/dashboard')
    return (

        <>
<main className='flex items-center justify-center h-screen'>
    <SignupForm/>
</main>
        </>)
}

export default page