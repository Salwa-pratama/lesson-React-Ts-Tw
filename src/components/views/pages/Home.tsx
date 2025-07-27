import { listStyle, titleSec, tableStyle } from "../../../script/styles";
import { materi } from "../../../data/materi";

export default function Home() {
  return (
    <div className="items-center">
      {/* Hello  */}
      <div className="text-center bg-sky-800 text-black font-bold p-2 mb-2 rounded ">
        <h1 className="text-2xl uppercase">Selamat Belajar React</h1>
        <p className="font-semibold">Learn By Programmer Zaman Now</p>
      </div>
      {/* section 1 */}
      <div>
        <h3 className={titleSec}>Kenapa Butuh FrameWork</h3>
        <ul className={listStyle}>
          <li>
            Salah satu alasannya adalah agar ada Standarisasi Saat Membuat
            project terutama ketika bekerja dalam tim
          </li>
          <li>
            Tanpa adanua Framework, maka setiap orang akan membuat kode dengan
            gaya masing-masing
          </li>
        </ul>
      </div>
      {/* section 2 */}
      <div>
        <h1 className={titleSec}>Sejarah ReactJS</h1>
        <ul className={listStyle}>
          <li>
            FaxJS mulai dikembangkan di Facebook sekitar tahun 2010 untuk
            menangani masalah update halaman feed/ timeline di Facebook tanpa
            harus refresh
          </li>
          <li>
            Tahun 2011, FaxJS diintegrasikan dengan XHP / (pengembangan PHP di
            Facebook), yang akhirnya dinamai ReactJS{" "}
          </li>
          <li>
            Tahun 2013, Facebook merilis ReactJS ke umum sebagai Open Source
            Tool pada saat JavaScript Conference{" "}
          </li>
          <li>
            Saat ini, ReactJS menjadi salah satu Front End Framework yang paling
            populer, dan banyak orang memanggilanya sebagi react karena react
            ada banyak jenis, ada react dengan JavaScript ada juga react dengan
            vue, ada juga react dengan TypeScript
          </li>
          <li>
            link Github :
            <a href="https://github.com/facebook/react">
              <u> https://github.com/facebook/react </u>
            </a>
          </li>
          <li>
            link web react :{" "}
            <a href="https://react.dev/">
              <u> https://react.dev/</u>
            </a>
          </li>
        </ul>
      </div>
      {/* section 3 */}
      <div>
        <h1 className={titleSec}>Component</h1>
        <ul className={listStyle}>
          <li>
            Saat belajar React, kita harus terbiasa dengan istilah Component
          </li>
          <li>
            Component adalah kumpulan kode yang bisa digunakan secara independen
          </li>
          <li>
            component bisa berisikan satu atau lebih HTML element, Kode
            JavaScript dan CSS
          </li>
          <li>
            Tidak ada aturan harus seberapa kecil atau besa sebuah Component
          </li>
          <li>
            Anggap saja seperti membuat Function, kita bisa membuat Function
            yang besar, atau kecil, karena tujuan Function adalah agar bisa
            digunakan secara berulang-ulang seperti pada semestinya sebuah
            function
          </li>
          <li>
            Struktur Component mirip seperti DOM (Document Object Model), Dimana
            kita bisa membuat Component di dalam Component lain
          </li>
        </ul>
      </div>
      {/* Section 4 */}
      <div>
        <h1 className={titleSec}>Format File JSX (JavaScript XML)</h1>
        <ul className={listStyle}>
          <li>React menggunakan JSX ketika membuat Component</li>
          <li>
            JSX (JavaScript XML atau JavaScript Syntax Extention), adalah
            kombinasi kode JavaScript dan XML (HTML) ,intinya dapat membungkus
            beberapa bahasa pemrograman seperti HTML,CSS, dan Javacript menjadi
            satu file dengan mudah
          </li>
          <li>
            JSX diperkenalkan oleh Facebook di react,namun JSX sudah banyak
            diadopsi oleh banyak Faramwork JavaScript{" "}
          </li>
        </ul>
      </div>
      {/* Section 5 */}
      <Section5 />
    </div>
  );
}

function Section5() {
  return (
    <>
      <h1 className={titleSec}>Materi Yang gwa pelajari</h1>
      <table className="bg-stone-800 text-white w-full border border-stone-700 mb-10 my-10 rounded">
        <thead className="bg-sky-900 bg-opacity-45">
          <tr>
            <th className={tableStyle}>Materi</th>
            <th className={tableStyle}>Learning</th>
            <th className={tableStyle}>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          {materi.map((item, index) => (
            <Todo
              key={index}
              materi={item.materi}
              isLearn={item.isLearn}
              keterangan={item.keterangan}
              tableStyle={tableStyle}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

function Todo({
  materi,
  isLearn,
  keterangan,
  tableStyle,
}: {
  materi: string;
  isLearn: boolean;
  keterangan: string;
  tableStyle: string;
}) {
  if (isLearn) {
    return (
      <tr>
        <td className={tableStyle}>{materi}</td>
        <td className={tableStyle}>✅</td>
        <td className={tableStyle}>{keterangan}</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td className={tableStyle}>{materi}</td>
        <td className={tableStyle}>❌</td>
        <td className={tableStyle}>{keterangan}</td>
      </tr>
    );
  }
}
