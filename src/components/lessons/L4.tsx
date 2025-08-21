import { titleSec, listStyle, imgStyle } from "../../script/styles";
import { codeImage10 } from "../../assets/images";
import Counter from "./LessonsComp/Hook";
export default function L4() {
  return (
    //
    <section>
      <div className="contaienr">
        {/* Section 1 */}
        <Section1 />
        {/* Section 2 */}
        <Section2 />
      </div>
    </section>
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
      <h1 className={titleSec}>Hooks State</h1>
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

function Section2() {
  return (
    <>
      <h1 className={titleSec}>State Hooks</h1>
      <ul className={listStyle}>
        <li>
          Component kadang perlu untuk berubah dikarenakan interaksi yang
          dilakukan pengguna
        </li>
        <li>
          Misal , input di klik bisa menaikkan data counter. Tombol next bisa
          mengubah gambar banner yang sedang muncul, dan lain lain
        </li>
        <li>
          Component harus bisa mengingat nilai saat ini, seperti counter saat
          ini, gambar saat ini dan lain-lain
        </li>
        <li>Di react, memori spesific di Component disebut state</li>
      </ul>

      <h1 className={titleSec}>State Menggunakan Local Variabel Biasa</h1>
      <ul className={listStyle}>
        <li>
          Apakah local variabel biasa di Component bisa digunakan untuk State?
          Sayangnya hal ini tidak bisa dilakukan
        </li>
        <li>
          Ketika React melakukan render Component untuk yang kedua kali dan
          seterusnya, maka semua kode Component akan dieksekusi ulang, oleh
          karena itu local variabel akan kembali ke nilai awal
        </li>
        <li>
          Perubahan di local varabel juga tidak akanmemicu render ulang
          Component
        </li>
      </ul>

      <h1 className={titleSec}>useState</h1>
      <ul className={listStyle}>
        <li>
          Untuk membuat State, kita bisa menggunakan function useState(initial)
        </li>
        <li>
          <a
            className="text-blue-600"
            href="https://react.dev/reference/react/useState"
          >
            Link Dokumentasi
          </a>
        </li>
        <li>
          Function useState akan mengembalikan array dengan dua nilai, pertama
          adalah State-nya, dan kedua ada function untuk mengubah value di State
          tersebut{" "}
        </li>
        <li>Component yang menggunakan State tersebut, secara otomatis akan</li>
      </ul>
      <p>Contoh : </p>
      <Counter />

      <h1 className={`mt-10 ${titleSec}`}> State Terisolasi dan Private</h1>
      <ul className={listStyle}>
        <li>
          State merupakan data yang terisolasi dan private secara local terhadap
          Component yang menggunakan State
        </li>
        <li>
          Artinya, jika kita merender Component yang sama berkali kali, maka
          State dari tiap Component tersebut akan terpisah satu sama lain{" "}
        </li>
        <li>
          Intinya intinya state hanya berlaku pada satu component yang
          menggunakan state dan direnderkan
        </li>
        <li>
          Contoh dibawah ini meruapakan component yang telah dirender tapi
          dirender lagi coba klik lak hasilnya beda
        </li>
      </ul>
      <Counter />

      <h1 className={titleSec}>Render</h1>
      <ul className={listStyle}>
        <li>
          Sebelum Component yang kita buat ditampilkan di layar, Component harus
          di render dulu oleh React
        </li>
        <li>
          Oleh karena itu, kita perlu tahu bagaimana cara kerja proses React ini
          ketika menampilkan COmponent yang kita buat
        </li>
        <li>Terdapat 3 tahapan proses menampilkan Component di Ract</li>
        <li>pertama, trigger (memicu) proses render</li>
        <li>Kedua, melakukan proses render Component</li>
        <li>
          Ketiga, menempatkan hasil render Component ke Dom (Document Object
          Model)
        </li>
      </ul>

      <h1 className={titleSec}>Proses Render di React</h1>
      <div className="flex  p-10 items-center text-center my-5">
        <div className="text-[12px] font-bold border mx-auto p-5 bg-sky-400 text-black">
          (1) Triger Render
        </div>
        <div className="border w-[50px]"></div>
        <div className="text-[12px] font-bold border mx-auto p-5 bg-sky-400 text-black">
          (2) Render Component
        </div>
        <div className="border w-[50px]"></div>
        <div className="text-[12px] font-bold border mx-auto p-5 bg-sky-400 text-black">
          (3) Commit to DOM
        </div>
      </div>

      <h1 className={titleSec}>Trigger Render</h1>
      <ul className={listStyle}>
        <li>Pemicu render biasanya terjadi karena dua hal</li>
        <li>
          Pertama adalah inisialisasi awal Component, yang kita lakukan
          menggunakan method render()
        </li>
        <li>kedua adalah ketika ada pemicu atau perubahan pada State</li>
        <li>
          Setiap terjadi perubahan State, secara otomatis React akan mengirimkan
          antrian untuk memicu proses render ulang
        </li>
      </ul>

      <h1 className={titleSec}>Render Component</h1>
      <ul className={listStyle}>
        <li>
          Setelah proses Trigger Render terjadi, React akan memanggil Component
          yang kit buat untuk mencari tahu apa yang harus ditampilkan di layar
        </li>
        <li>
          Rendering adalah proses React memanggil Component yang kita buat
        </li>
        <li>
          Pada proses inisialisasi awal, React akan memanggil Root Component
          (paling atas)
        </li>
        <li>
          Pada saat proses render ulang, React hanya akan memanggil ulang
          Component yang state nya berubah
        </li>
        <li>
          Setelah proses render selesai, React akan melakukan proses Commit
        </li>
      </ul>
    </>
  );
}
