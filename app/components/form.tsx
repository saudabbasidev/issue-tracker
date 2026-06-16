"use client"
import LinkTreeUI from "@/app/components/linkshow"
import { CreateLinks, getAllLinks } from "@/app/libs/server.action"
import { useForm } from "react-hook-form"


const FormComp = () => {


    const { register, handleSubmit } = useForm()

    return (
        <>

            <main className=''>

                <form className="fieldset" onSubmit={handleSubmit(async (data) => { await CreateLinks(data) })} >

                    <legend className="fieldset-legend">Title</legend>
                    <input type="text" {...register("title")} className="input" placeholder="Type here" />
                    <legend className="fieldset-legend">URL</legend>
                    <input type="text" className="input" {...register("url")} placeholder="Type here" />
                    <input type="text" className="input" {...register("bio")} placeholder="Bio" />
                    <button className="btn w-30">Create</button>
                </form>

            </main>



        </>
    )

}

export default FormComp