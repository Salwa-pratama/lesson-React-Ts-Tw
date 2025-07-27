import { heroImg } from "../../../assets/images";

export default function Card() {
  return (
    <div className="my-[200px] h-[500px] border w-[300px] mx-auto bg-white text-black  rounded font-tahoma">
      {/* ini header */}
      <div className="flex h-[60px] items-center">
        <h1 className="ml-6 text-2xl font-bold bg-blue-700 text-white  p-1 rounded">
          TI
        </h1>
        <h1 className="ml-auto mr-5 text-5xl font-bold text-blue-800">23</h1>
      </div>

      {/* ini gambar */}
      <div className="border border-black w-[250px] mx-auto my-4 bg-blue-800 bg-opacity-25 h-[250px] ">
        <img
          src={heroImg}
          alt=""
          className="h-[400px] block mx-auto  mt-[-151px] "
        />
      </div>
      {/* ini info */}
      <div className="flex border ">
        <div className="border-r-4 p-2 w-[150px] border-r-blue-600 pl-6">
          <p className="text-2xl font-bold ">Ananda</p>
          <p className="text-2xl">Salwa</p>
        </div>
        <div className="p-2">
          <p className="text-2xl font-bold">Software</p>
          <p className="text-2xl text-blue-800">Engineer</p>
        </div>
      </div>

      {/* ini footer */}
      <div className="flex p-4 gap-2 pl-6 pr-6">
        <div className="w-[200px] text-center justify-center items-center  bg-black  text-blue-300 rounded border border-black flex gap-10 ">
          <i className="fa-brands fa-github text-2xl"></i>
          <i className="fa-brands fa-instagram text-2xl"></i>
          <i className="fa-brands fa-x-twitter text-2xl "></i>
        </div>
        <div className="border text-center ">
          <p className="border text-[10px]  p-1  font-bold">Angkatan</p>
          <h1 className=" p-1 text-[12px]">2023</h1>
        </div>
      </div>
    </div>
  );
}
