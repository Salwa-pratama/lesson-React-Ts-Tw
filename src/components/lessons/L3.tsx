import { listStyle, titleSec, imgStyle, tableStyle } from "../../script/styles";
import {
  codeImage5,
  codeImage6,
  codeImage7,
  codeImage8,
  codeImage9,
} from "../../assets/images";
import { eventHandler } from "../../data/materi";
import { useState } from "react";

export default function L3() {
  return (
    <>
      {/* Section1 */}
      <Section1 />
      {/* Section2 */}
      <Section2 isDeleted={false} />
      {/* Section3 */}
      <Section3 />

      {/* Section4 */}
      <Section4 />
    </>
  );
}

function Section1() {
  return (
    <>
      <h1 className={titleSec}>Conditional / IF statement</h1>
      <ul className={listStyle}>
        <li>
          Saat kita membuat halaman Web, sering sekali kita menampilkan tampilan
          berbeda pada kondisi tertentu
        </li>
        <li>Hal ini juga bisa dilakukan di JSX</li>
        <li>
          Kita bisa mebambahkan kondisi menggunakan JavaScript, dan
          mengembalikan Component yang berbeda berdasarkan kondisi yang
          diinginkan
        </li>
        <li>
          Contoh kita akan membuat halaman TodoList, dan jika Todo nya sudah
          selesai, kita akn coret element teks nya
        </li>
      </ul>
      <p>Contoh To do list disini : </p>
      <ul className={listStyle}>
        <Todo isCompleted={false} text="Learn React" />
        <Todo isCompleted={true} text="rebahan santuy" />
      </ul>
      <p>Contoh Code : </p>
      <img src={codeImage5} alt="" className={`${imgStyle} h-[250px]`} />
      <img src={codeImage6} alt="" className={`${imgStyle} h-[250px]`} />
    </>
  );
}

function Todo({ text, isCompleted }: { text: string; isCompleted: boolean }) {
  if (isCompleted) {
    return (
      //
      <li>{text} ✅</li>
    );
  } else {
    return (
      //
      <li>{text} ❌</li>
    );
  }
}

// Section 2
function Section2({ isDeleted }: { isDeleted: boolean }) {
  {
    if (isDeleted) {
      return null;
    } else {
      return (
        <>
          <h1 className={titleSec}>Null Component</h1>
          <ul className={listStyle}>
            <li>Sebuah komponen juga bisa mengembalikan dengan nilai null</li>
            <li>
              Pada kasus tertentu biasanya ketika kita ingin membuat sebuah
              wadah komponen tpi belum ada isinya, disitu kita bisa
              mengembalikan nilai null
            </li>
          </ul>
        </>
      );
    }
  }
}

function Section3() {
  return (
    <>
      <h1 className={titleSec}>Event Handler</h1>
      <p className="pl-8 my-8">
        {" "}
        Event handler adalah fungsi yang dijalankan saat terjadi event (misalnya
        klik tombol, ketik input, submit form, dll)
      </p>
      <table className="bg-stone-800 text-white w-full border border-stone-700 mb-10 ">
        <thead className="bg-sky-900 bg-opacity-45">
          <tr>
            <td className={tableStyle}>Event</td>
            <td className={tableStyle}>Penjelasan</td>
            <td className={tableStyle}>Contoh Handler</td>
          </tr>
        </thead>
        <tbody>
          {eventHandler.map((item, index) => (
            <tr key={index}>
              <td className={tableStyle}>{item.event}</td>
              <td className={tableStyle}>{item.penjelasan}</td>
              <td className={tableStyle}>{item.contoh}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ClickMe />
      <Submit />
      <h1 className="text-center mb-5 text-4xl font-bold">
        Mouse Move Event handler
      </h1>
      <HoverBox />

      {/* <Card /> */}
    </>
  );
}

// Event handler Click dengan parameter
function ClickMe() {
  // On Click
  const handlerClick = (nama: string) => {
    alert(`halo ${nama}`);
  };
  // On change
  const handleInputChange = (event: any) => {
    console.log("isi input", event.target.value);
  };
  return (
    // Element Button
    <>
      <button
        // On click
        onClick={() => handlerClick("Ananda")}
        className="bg-sky-500 p-2 rounded-full w-[120px] mx-auto block hover:bg-stone-800 "
      >
        Klick me
      </button>
      <p className="pl-8"> Contoh kode event onClick</p>
      <img src={codeImage7} className={`${imgStyle}  rounded`} alt="" />

      <p className="pl-8"> contoh penggunaan</p>
      <img src={codeImage8} alt="Gambar 8" className={`${imgStyle} `} />
      <input
        type="text"
        // On change
        onChange={handleInputChange}
        className="text-black p-1 w-[350px] m-5 mx-auto block rounded"
      />
    </>
  );
}

function Submit() {
  type HasilType = {
    nama: string;
    noHp: string;
    usia: string;
  };
  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");
  const [usia, setUsia] = useState("");
  const [hasil, setHasil] = useState<HasilType | null>(null);

  const handleSubmit = () => {
    setHasil({ nama, noHp, usia });
  };
  return (
    //
    <div>
      <h1 className="text-sky-500 text-center  text-6xl font-bold">
        Event handle Submit
      </h1>

      {hasil && (
        <div className="w-fit border border-sky-600 p-3 text-center block mx-auto my-4 rounded">
          <div className="text-white text-left mt-4">
            <p className="text-sky-800 text-2xl font-bold">
              Nama : <span className="text-white">{hasil.nama}</span>
            </p>
            <p className="text-sky-800 text-2xl font-bold">
              NoHp : <span className="text-white">{hasil.noHp}</span>
            </p>
            <p className="text-sky-800 text-2xl font-bold">
              Usia : <span className="text-white">{hasil.usia}</span>
            </p>
          </div>
        </div>
      )}

      <div className="border border-sky-500 my-6 rounded p-4 ">
        <p className="text-center font-bold ">Isikan identitas anda </p>
        <input
          type="text"
          name="nama"
          id="nama"
          className="text-black p-2 w-[350px] m-5 mx-auto block rounded placeholder-sky-950"
          placeholder="Masukkan nama anda"
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="number"
          name="noHp"
          id="noHp"
          placeholder="Masukkan no Hp anda"
          className="text-black p-2 w-[350px] m-5 mx-auto block rounded placeholder-sky-950"
          onChange={(e) => setNoHp(e.target.value)}
        />
        <input
          type="number"
          name="usia"
          id="usia"
          placeholder="Masukkan usia anda"
          className="text-black p-2 w-[350px] m-5 mx-auto block rounded placeholder-sky-950"
          onChange={(e) => setUsia(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 block mx-auto rounded"
        >
          Submit Change
        </button>
      </div>
    </div>
  );
}

function HoverBox() {
  const [bgColor, setBgColor] = useState("rgba(255,255,255,1)");

  // Ini membrikan type komponen react menggunakan TypeScript
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // ubah posisi X dan Y menjadi nilai RGB
    const r = Math.min(255, Math.round((x / rect.width) * 255));
    const g = Math.min(255, Math.round((y / rect.height) * 255));
    const b = 150;
    const a = 0.8;

    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
    setBgColor(rgba);
  };

  return (
    <div
      onMouseMove={handleMouseLeave}
      style={{ backgroundColor: bgColor }}
      className="border border-sky-900 rounded h-[500px] items-center content-center text-center font-bold "
    >
      <p>Arahkan Cursor anda ke container ini</p>
    </div>
  );
}

// Section 4
function Section4() {
  return (
    <div className="mt-10">
      <h1 className={titleSec}>Event object</h1>
      <ul className={listStyle}>
        <li>
          Saat kita membuat event handler Function, kita bisa menambahkan Event
          Object, sebagai parameter di Function tersebut
        </li>
        <li>React Event Object kompatibel dengan standart DOM event Object</li>
      </ul>

      <EventObj text={"klik me"} message="Hallo manusia" />
    </div>
  );
}

// event Object React
function EventObj({ text, message }: { text: string; message: string }) {
  function Click(e: any) {
    console.info(e);
    alert(message);
  }

  return (
    <>
      <button
        onClick={Click}
        className="bg-sky-500 p-2 rounded-full mx-auto block hover:bg-indigo-800"
      >
        {text}
      </button>

      <p className="my-5 ">Contoh code</p>
      <img src={codeImage9} className={imgStyle} alt="" />
    </>
  );
}
