
const Linkbar = ({ links }: any) => {
  return (
    <div className="space-y-3">
      {links && links?.map((data: any) => (

        <a
        key={data._id}
          href="#"
          className="block w-full rounded-xl bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-800 transition"
        >
          {data.title}
        </a>
      ))}
      {links==0 &&
        <p>There is nothing here</p>
      }

    </div>
  )
}

export default Linkbar