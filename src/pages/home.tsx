import Logo from "../assets/icon-nlw.svg";
function Home() {
  return (
    <div className="max-w-[1216px] m-auto">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={Logo} alt="logo" width={200} />
        <h1 className="uppercase text-2xl font-bold text-primary">
          NLW - React project
        </h1>
        <p className="w-[55%] text-center text-zinc-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
          voluptatibus voluptatem. Praesentium ab ipsum expedita magni rem!
          Possimus consequuntur, cumque nisi nihil dolores voluptas mollitia
          laborum provident dolore suscipit cum!
        </p>
      </div>
    </div>
  );
}

export { Home };
