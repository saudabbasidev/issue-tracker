import { json } from "stream/consumers";
import { auth } from "../auth";
import { getAllLinks, GetUserDetails } from "../libs/server.action";
import Linkbar from "./link";


export default async function LinkTreeUI() {

  const alldata: any = await getAllLinks();
  const session = await auth()
  const userdata=await GetUserDetails()


  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
      <div className="min-w-90 space-y-6 text-center">

        {/* Profile Section */}
        <div className="space-y-3">
          <div className="h-24 w-24 mx-auto rounded-full bg-zinc-800" />

          <div>
            <h1 className="text-xl font-semibold text-white">
              @{userdata?.username}
            </h1>
            <p className="text-sm text-zinc-400">
              {userdata?.bio}
            </p>
          </div>
        </div>

        {/* Links Section */}

        <Linkbar links={alldata} />
        <p className="text-white">

    {/* {JSON.stringify(alldata)} */}
        
        </p>

        {/* Footer */}
        <div className="pt-4 text-xs text-zinc-600">
          powered by your app
        </div>
      </div>
    </div>
  );
}