'use client'

import { useForm } from "react-hook-form"
import { UserOnboarded } from "../libs/server.action"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const DialongBox = () => {
    const { register, handleSubmit } = useForm()
    const router = useRouter()

    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className="btn">open modal</label>

            {/* Put this part before </body> tag */}
            <input defaultChecked type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal p-0" role="dialog">
                <div className="modal-box space-y-reverse space-y-3">
                    <h3 className="text-lg font-semibold">Select a Username For You page</h3>
                    <form className="space-y-3" onClick={handleSubmit(async (data) => {
                        await UserOnboarded(data).then(() =>
                            router.refresh()
                        )
                    })}>

                        <input type="text" className="input h-8 w-full" placeholder="Username" {...register("username")} />
                        <button className="btn bg-black text-white">Submit</button>
                    </form>
                    <div className="modal-action">
                        {/* <label htmlFor="my_modal_6" className="btn">Close!</label> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DialongBox