"use client"
import { useEffect, useState } from "react"
import { getAllLinks } from "../libs/server.action"


const LinkEdit = () => {
    const [links, setlinks] = useState<any>()
    useEffect(() => {
      async function fetchLinks(){
        const link=await getAllLinks()
        setlinks(link)

      }
    }, [])
    
   
    return (
        <>
            {links && links?.map((data: any) => (

                <div
                    key={data._id}

                    className="block w-full rounded-xl bg-white px-4 py-3 te hover:bg-zinc-800 transition"
                >
                    {data.title}
                </div>
            ))}
        </>
    )
}

export default LinkEdit