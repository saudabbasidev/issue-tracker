'use client'
import { useForm } from "react-hook-form"
import { SignupUser } from "../libs/server.action"


const SignupForm = () => {
    const { register, handleSubmit } = useForm()
    return (
        <div><form onSubmit={handleSubmit(async (data) => { await SignupUser(data) })} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-2xl">
            <legend className="fieldset-legend text-lg"  >Create a new Account</legend>

            <label className="label">Email</label>
            <input {...register("email")} required minLength={1}  type="email" className="input" placeholder="Email" />

            <label className="label">Your Password</label>
            <input {...register("password")} type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Create Account</button>
        </form></div>
    )
}

export default SignupForm