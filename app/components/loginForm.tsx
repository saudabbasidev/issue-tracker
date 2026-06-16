"use client"

import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"

const LoginForm = () => {
  const { register, handleSubmit } = useForm()
  return (
    <>
      <form onSubmit={handleSubmit(async (data) => { await signIn('credentials', data) })} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" {...register('email')} />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" {...register('password')} />

        <button className="btn btn-neutral mt-4">Login</button>
      </form>

    </>
  )
}

export default LoginForm