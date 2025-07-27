import { listStyle, titleSec, imgStyle } from "../../script/styles";
import {
  codeImage1,
  codeImage2,
  codeImage3,
  codeImage4,
} from "../../assets/images";

// import propsImg from "../../assets/props.png";
// Main komponen
export default function L2() {
  return (
    <>
      {/* Section 1 */}
      <Section1 img1={codeImage1} img2={codeImage2} />

      {/* Section 2 */}
      <Section2 />

      {/* Section3 */}
      <Section3 />
    </>
  );
}

// Section 1
function Section1({ img1, img2 }: { img1: string; img2: string }) {
  return (
    <>
      <h1 className={titleSec}>PROPS</h1>
      <ul className={listStyle}>
        <li>React Componenent menggunakan Props untuk berkomunikasi</li>
        <li>
          Parent Component bisa mengirim informasi ke Child Component dengan
          menggunakan Props
        </li>
        <li>
          Props itu mirip seperti attribute di HTML Element, tapi kita bisa
          mengirim nilai JavaScript seperti object, array, function atau yang
          lainnya
        </li>
      </ul>
      <h1 className="pl-3 font-bold text-sky-400">Contoh gambar : </h1>
      {img1 ? (
        <img src={img1} alt="" className={imgStyle} />
      ) : (
        <p>Gambar tidak tersedia</p>
      )}
      <h1 className="pl-3 font-bold text-sky-400">
        Contoh Props dengan Default value :{" "}
      </h1>

      {img2 ? (
        <img src={img2} alt="" className={imgStyle} />
      ) : (
        <p>Gambar belum tersedia</p>
      )}
      <h1 className="pl-3 font-bold text-sky-400 text-3xl p-3">
        Nah Sekarang nilai apa aja sih yang bisa digunakan di props ?
      </h1>
      <h1 className="pl-3 font-bold text-white">
        Berikut yang bisa ditambahkan di props
      </h1>
      
      <table className="bg-stone-800 text-white w-full border border-stone-700 mb-10">
        <thead>
          <tr className="bg-stone-700">
            <th className="px-4 py-2 border border-stone-700 text-left">
              Jenis
            </th>
            <th className="px-4 py-2 border border-stone-700 text-left">
              Contoh
            </th>
            <th className="px-4 py-2 border border-stone-700 text-left">
              Keterangan
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-stone-700">✅ String</td>
            <td className="px-4 py-2 border border-stone-700">"Hello"</td>
            <td className="px-4 py-2 border border-stone-700">Paling dasar</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">✅ Number</td>
            <td className="px-4 py-2 border border-stone-700">123, 3.14</td>
            <td className="px-4 py-2 border border-stone-700">Nilai angka</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">✅ Boolean</td>
            <td className="px-4 py-2 border border-stone-700">true, false</td>
            <td className="px-4 py-2 border border-stone-700">Kondisi</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">✅ Array</td>
            <td className="px-4 py-2 border border-stone-700">
              [1,2,3], ["a","b","c"]
            </td>
            <td className="px-4 py-2 border border-stone-700">List data</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">✅ Object</td>
            <td className="px-4 py-2 border border-stone-700">umumnya objek</td>
            <td className="px-4 py-2 border border-stone-700">
              Struktur kompleks
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">✅ Function</td>
            <td className="px-4 py-2 border border-stone-700">
              callback, event handler
            </td>
            <td className="px-4 py-2 border border-stone-700">Fungsi</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">
              ✅ JSX / ReactNode
            </td>
            <td className="px-4 py-2 border border-stone-700">
              &lt;h1&gt;Hello&lt;/h1&gt;
            </td>
            <td className="px-4 py-2 border border-stone-700">Render konten</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">✅ Component</td>
            <td className="px-4 py-2 border border-stone-700">
              &lt;MyComponent /&gt;
            </td>
            <td className="px-4 py-2 border border-stone-700">
              Kirim komponen sebagai prop
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">
              ✅ Class Instance
            </td>
            <td className="px-4 py-2 border border-stone-700">new Date()</td>
            <td className="px-4 py-2 border border-stone-700">
              Kebutuhan khusus
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">✅ Symbol</td>
            <td className="px-4 py-2 border border-stone-700">Symbol("id")</td>
            <td className="px-4 py-2 border border-stone-700">
              Jarang, tapi valid
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">✅ BigInt</td>
            <td className="px-4 py-2 border border-stone-700">123n</td>
            <td className="px-4 py-2 border border-stone-700">
              Angka besar (jarang di UI)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">
              ✅ Enum / Const
            </td>
            <td className="px-4 py-2 border border-stone-700">
              MyEnum.OptionA
            </td>
            <td className="px-4 py-2 border border-stone-700">
              Kalau pakai TypeScript
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">
              ✅ null / undefined
            </td>
            <td className="px-4 py-2 border border-stone-700">
              null, undefined
            </td>
            <td className="px-4 py-2 border border-stone-700">
              Harus di-handle di komponen
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">✅ Promise</td>
            <td className="px-4 py-2 border border-stone-700">
              fetch(), axios()
            </td>
            <td className="px-4 py-2 border border-stone-700">
              Async, jangan render langsung
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">✅ Map / Set</td>
            <td className="px-4 py-2 border border-stone-700">
              new Map(), new Set()
            </td>
            <td className="px-4 py-2 border border-stone-700">
              Struktur data kompleks
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-stone-700">
              ✅ Ref (useRef)
            </td>
            <td className="px-4 py-2 border border-stone-700">ref.current</td>
            <td className="px-4 py-2 border border-stone-700">
              Kirim ref antar komponen
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

// Section 2
function Section2() {
  const Hewan1: ObjectProps = {
    namaHewan: "elang",
    jenisHewan: "karnivora",
    jumlahHewan: 10,
    skill: () => {
      return "Hewan ini bisa terbang";
    },
  };
  return (
    <>
      <h1 className={titleSec}>Menambahkan Props</h1>
      <ul className={listStyle}>
        <li>
          Untuk menambahkan Props pada Component, kita hanya perlu menambahkan
          parameter objec pada function di Component
        </li>
        <li>
          Parameter Props tersebut merupakan JavaScript Object, Sehingga kita
          bisa mengakses detail attribute yang dikirim dari parent melalui Props
        </li>
      </ul>
      {/* Ini element Props yang menampung object */}
      <Props {...Hewan1} />
    </>
  );
}

interface ObjectProps {
  namaHewan: string;
  jenisHewan: string;
  jumlahHewan: number;
  skill(): string;
}

// Komponen dengan properti
function Props(
  object: ObjectProps = {
    namaHewan: "belum diisi",
    jenisHewan: "belum diisi",
    jumlahHewan: 0,
    skill: () => "skill belum ditambahkan",
  }
) {
  return (
    <>
      <h1 className={titleSec}>Contoh Penggunaan props</h1>
      <ul className={listStyle}>
        <li>Nama Hewan : {object.namaHewan}</li>
        <li>Nama JenisHewan : {object.jenisHewan}</li>
        <li>Nama JumlahHewan : {object.jumlahHewan}</li>
        <li>Skill : {object.skill()}</li>
      </ul>
    </>
  );
}

function Section3() {
  return (
    <>
      <h1 className={titleSec}>Nestet Component</h1>
      <ul className={listStyle}>
        <li>JSX juga mendukung pembuatan Nested Component</li>
        <li>
          Hal ini memungkinnkan kita bisa membuat Component yang didalamnya bisa
          ditambahkan Component lain secara dinamiss
        </li>
        <li>
          Agar component bisa memiliki Comonent lain didalamnya, kita bisa
          menggunakan attribute childern pada Props
        </li>
        <li>
          Misal sekarang kita akan membuat Component bernama Container, dan
          didalamnya kita bisa berisi Component lainnya
        </li>
      </ul>
      <NestedComponent>
        <Isi />
      </NestedComponent>

      <p>Contoh Code Nested Component</p>
      <img
        src={codeImage3}
        alt=""
        className="h-[300px] mx-auto my-10 rounded "
      />
      <p>Contoh Penggunaan</p>
      <img
        src={codeImage4}
        alt=""
        className="h-[300px] mx-auto my-10 rounded"
      />
    </>
  );
}

function Isi() {
  return (
    <>
      <h1 className="text-sky-500 text-center text-2xl font-bold p-5">
        Hello aku nested komponen
      </h1>
    </>
  );
}

function NestedComponent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Dibawah ini merupakan nested komponen</h1>
      {children}
    </>
  );
}
