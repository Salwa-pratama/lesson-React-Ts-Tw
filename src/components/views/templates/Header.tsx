import Logo from "../../../assets/react.svg";

export default function Header() {
  return (
    <div
      className="flex w-full bg-stone-800 text-white p-5 font-bold justify-items-center"
      id="header"
    >
      <div className="flex items-center gap-4 ">
        <h1 className="text-2xl ">Learn React </h1>
        <img src={Logo} alt="" className="h-10" />
      </div>
      <div className="ml-auto flex flex-col justify-self-end">
        <h1 className="">Create by ananda salwa pratama</h1>
        <p className="ml-auto font-thin text-sm">
          Last update : 20, february 2026
        </p>
      </div>
    </div>
  );
}
