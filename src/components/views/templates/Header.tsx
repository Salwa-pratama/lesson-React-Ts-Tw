import Logo from "../../../assets/react.svg";

export default function Header() {
  return (
    <div
      className="flex w-full bg-stone-800 text-white p-5 font-bold "
      id="header"
    >
      <div className="flex items-center gap-4 ">
        <h1 className="text-2xl ">Learn React </h1>
        <img src={Logo} alt="" className="h-10" />
      </div>
    </div>
  );
}
