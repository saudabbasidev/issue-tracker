
const page = () => {
  return (
    <>
      <section className="h-[100vh] bg-lime-800 grid grid-cols-2 max-md:grid-cols-1">
        <div className="space-y-3 flex justify-center md:ml-[10vw] max-md:px-5 flex-col">
          <h1 className="font-bold text-lime-300 text-5xl ">
            A link in bio built <br /> for you.
          </h1>
          <p className="text-white font-medium text-wrap">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share <br /> everything you create, curate and sell from
            your Instagram, TikTok, Twitter, YouTube <br /> and other social
            media profiles.
          </p>

          <div className="flex ">
            <input
              type="text"
              name=""
              className="input w-30 rounded-xl placeholder:font-bold"
              placeholder="linkr.io/yourname"
            />
            <button className="btn rounded-full bg-lime-200 border-0 shadow-none">
              Get Started for Free
            </button>
          </div>
        </div>
        <div className="w-  flex items-center justify-center md:mr-[10vw] flex-col">
          col 2
        </div>
      </section>
    </>
  );
}

export default page