
import FormComp from "@/app/components/form"
import LinkTreeUI from "@/app/components/linkshow"
const page = () => {


  return (
    <>
      <section className="flex py-20 px-10 max-md:flex-col justify-evenly gap-20">

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