import { getAllLinks } from "../libs/server";
import Linkbar from "./link";

export default async function LinkTreeUI() {

  const alldata: any = await getAllLinks();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
      <div className="min-w-90 space-y-6 text-center">

        {/* Profile Section */}
        <div className="space-y-3">
          <div className="h-24 w-24 mx-auto rounded-full bg-zinc-800" />

          <div>
            <h1 className="text-xl font-semibold text-white">
              Your Name
            </h1>
            <p className="text-sm text-zinc-400">
              Your bio goes here
            </p>
          </div>
        </div>

        {/* Links Section */}

        {/* <Linkbar links={alldata} /> */}
        <p className="text-white">

        {JSON.stringify(alldata._id)}
        </p>

        {/* Footer */}
        <div className="pt-4 text-xs text-zinc-600">
          powered by your app
        </div>
      </div>
    </div>
  );
}