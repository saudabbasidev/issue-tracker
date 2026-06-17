
import { auth } from "@/app/auth"
import DialongBox from "@/app/components/dialong"
import FormComp from "@/app/components/form"
import LinkTreeUI from "@/app/components/linkshow"
import { Onboard } from "@/app/libs/server.action"
import { redirect } from "next/navigation"
const page = async () => {
  const session = await auth()
  if (!session?.user) redirect('/login')

  const user = await Onboard()
  return (
    <>
      <section className="flex py-20 px-10 max-md:flex-col justify-evenly gap-20">
        {!user &&
          <>
            <DialongBox />
          </>
        }

        <FormComp />
        <section className="flex justify-center">
          <div className="mockup-phone h-200    w-105 border-[#009e22]">
            <div className="mockup-phone-camera"></div>
            <div className="mockup-phone-display sm:flex items-center justify-center">
              <LinkTreeUI />
            </div>
          </div>
        </section>

      </section>
    </>
  )

}

export default page