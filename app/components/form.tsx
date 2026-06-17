"use client";

import { useForm } from "react-hook-form";
import { CreateLinks, GetUserDetails, UpdatePage } from "@/app/libs/server.action";
import { useRouter } from "next/navigation";
import LinkEdit from "./linkcontrol";


const FormComp = () => {
    
    const router = useRouter()
    const { register, handleSubmit } =
        useForm();

    return (
        <main className="min-h-screen p-4 md:p-2">
            <div className="grid grid-cols-1 gap-6">
                {/* ================= UPDATE PROFILE ================= */}
                <div className="card bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">Update Profile</h2>

                        <form
                            className="space-y-3"
                            onSubmit={handleSubmit(async (data) => {
                                await UpdatePage(data).then(()=> router.refresh())
                            })}
                        >
                            <div>
                                <label className="label">Username</label>
                                <input
                                    type="text"
                                    // defaultValue={username}
                                    {...register("username")}
                                    className="input input-bordered w-full"
                                    placeholder="your-username"
                                />
                            </div>

                            <div>
                                <label className="label">Bio</label>
                                <textarea
                                // defaultValue={bio}
                                    {...register("bio")}
                                    className="textarea textarea-bordered w-full"
                                    placeholder="Tell something about yourself"
                                />
                            </div>

                            <button className="btn btn-secondary w-full">
                                Update Profile
                            </button>
                        </form>
                    </div>
                </div>
                {/* ================= CREATE LINKS ================= */}
                <div className="card bg-base-100 ">
                    <div className="card-body">
                        <LinkEdit/>
                        <h2 className="card-title">Create Link</h2>




                        <label htmlFor="my_modal_7" className="btn">Create Link</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                        <div className="modal p-0" role="dialog">
                            <div className="modal-box space-y-reverse space-y-3">
                                <h3 className="text-lg font-semibold">Create a Link</h3>
                                <form className="space-y-3" onClick={handleSubmit(async (data) => {
                                    await CreateLinks(data).then(() => router.refresh())

                                })}>

                                    <input type="text" minLength={1} className="input h-8 w-full" placeholder="Title" {...register("title")} />
                                    <input type="url" minLength={1} className="input h-8 w-full" placeholder="URL" {...register("url")} />
                                    <button className="btn bg-black text-white">Create</button>
                                </form>
                                <div className="modal-action">
                                    {/* <label htmlFor="my_modal_6" className="btn">Close!</label> */}
                                </div>
                            </div>
                            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                        </div>
                    </div>
                </div>


            </div>
        </main>
    );
};

export default FormComp;