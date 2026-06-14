"use client"
import { Button, TextField } from '@radix-ui/themes'
// import SimpleMDE from "react-simplemde-editor"
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import { createIssue } from '@/app/libs/server';
import { useRouter } from 'next/navigation';

interface Iform {
    title: string,
    description: string

}
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});


const page = () => {
    const router = useRouter()
    const { register, control, handleSubmit } = useForm<Iform>()

    return (
        <>
            <form className='max-w-xl space-y-4 p-5' onSubmit={handleSubmit(async (data) => {
                await createIssue(data);
                router.push("/issue")
            })}>

                <TextField.Root variant="surface" placeholder="Title of Issue" {...register("title")} required />
                <Controller name="description" control={control} render={({ field }) =>
                    <SimpleMDE placeholder="Describe in details…" {...field} />
                } />
                <Button>Submit</Button>
            </form>

        </>
    )
}

export default page