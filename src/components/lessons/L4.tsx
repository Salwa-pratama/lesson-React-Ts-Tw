import { titleSec, listStyle, imgStyle } from "../../script/styles";
import { codeImage10 } from "../../assets/images";
export default function L4() {
  return (
    //
    <>
      {/* Section 1 */}
      <Section1 />
    </>
  );
}

// ini Section1
function Section1() {
  return (
    // Isi Secction 1
    <>
      {/* Side Effect */}
      <h1 className={titleSec}>Side Effect</h1>
      <ul className={listStyle}>
        <li>Apakah Component boleh memiliki Side Effect (efek samping)</li>
        <li>
          side effect bisa terjadi dikarenakan adanya interaksi dari pengguna
          melali EventHndler
        </li>
        <li>Contoh ada di bawah</li>
      </ul>

      <Sayhay />
      <p>Contoh Code</p>
      <img src={codeImage10} className={imgStyle} alt="" />

      {/* Hooks */}
      <h1 className={titleSec}>Hooks</h1>
      <ul className={listStyle}>
        <li>Hooks adalah fitur dari React yang bisa digunakan di Component </li>
        <li>
          Ada banyak sekali fitur yang bisa kita gunakan di React Hooks, dan
          kita akan bahas secara bertahap{" "}
        </li>
        <li>
          <a
            href="https://react.dev/reference/react/hooks"
            className="text-sky-800 underline"
          >
            Link Documentasi
          </a>
        </li>
      </ul>
    </>
  );
}

function Sayhay() {
  return (
    <>
      <form className="border border-sky-400 p-5 items-center mx-10 rounded-full flex flex-col gap-10">
        <p>
          Hello <span id="output"></span>
        </p>
        <input
          placeholder="Masukkan nama anda"
          type="text"
          id="input_name"
          className="p-2 text-sky-400 rounded-full bg-transparent border border-sky-400 "
        />
        <button
          className="bg-white px-3 text-violet-800 rounded-full font-bold hover:bg-sky-300 hover:text-cyan-50"
          onClick={(e) => {
            // Ini tu kaya nya dia mencegah eror
            e.preventDefault();
            const name = document.getElementById(
              "input_name"
            ) as HTMLInputElement | null;
            const output: HTMLElement | null =
              document.getElementById("output");
            if (name && output) {
              output.innerText = name.value;
              name.value = "";
            }
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}
