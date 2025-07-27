import { listStyle, titleSec } from "../../script/styles";
export default function Part1_useStated() {
  return (
    <div>
      <section>
        <h1 className="font-bold text-3xl text-center p-5 mt-0 text-sky-500">
          Pendahuluan Tentang JSX
        </h1>

        <h1 className={titleSec}>Component</h1>
        <ul className={listStyle}>
          <li>React Component mendukung semua elemen HTML dan SVG </li>
          <li>
            Jadi kita tidak perlu khawatir ketika membuat Component, karena
            semua elemen pasti didukung
          </li>
          <li>
            Link Dokumentasi{" "}
            <a href="">
              <u>https://react.dev/reference/react-dom/components</u>
            </a>
          </li>
          <li>Support all element HTML</li>
        </ul>
      </section>
      {/* Section2 */}
      <Section2 />
      {/* section3 */}
      <Section3 />
      {/* Section4 */}
      <Section4 />
      <section>
        <h1 className={titleSec}>JSX Converter</h1>
        <ul className={listStyle}>
          <li>Jadi disini ada web yang bisa mengonversi HTML ke JSX</li>
          <li>
            Berikut Websitenya :{" "}
            <a href="https://transform.tools/html-to-jsx">
              <u className="text-blue-600">
                https://transform.tools/html-to-jsx{" "}
              </u>
            </a>
          </li>
        </ul>
      </section>
      <Section5 />
    </div>
  );
}

// Section2
function Section2() {
  return (
    <section>
      <h1 className={titleSec}>Multiple Component</h1>
      <ul className={listStyle}>
        <li>
          Disini bisa juga kita melakukan istilahnya satu file itu bisa diisi
          dengan beberapa komponent
        </li>
        <li>
          Menurutku cukup clean code sih kelihatan gitulo dari pada tag HTML
          jadi satu itu agak memusingkan wkwk
        </li>
      </ul>
    </section>
  );
}

// Section 3
function Section3() {
  return (
    <section>
      <h1 className={titleSec}>Kenapa JSX?</h1>
      <ul className={listStyle}>
        <li>
          Web dibuat menggunakan HTML, CSS, dan JavaScript. Biasannya kita akan
          menyimpan konten di HTML, desain di CSS dan logika aplikasi di
          JavaScript. Pada umumnya kita meyimpan kode nya di file yang terpisah
        </li>
        <li>
          Tapi saat ini, Web sudah lebih iinteratif dan semua problem itu bisa
          terselsaiakn dengan menggunakan JSX atau TSX
        </li>
      </ul>
    </section>
  );
}

function Section4() {
  return (
    <section>
      <h1 className={titleSec}>Mengubah HTML ke JSX</h1>
      <ul className={listStyle}>
        <li>
          Saat mengubah kode HTML ke JSX, kita tidak bisa lakukan semudah copy
          paste karena JSX punya aturan tersendii
        </li>
        <li>
          seperti menutup tag dengan dirinya sendiri Contoh :
          <code>&lt;header /&gt;</code>
        </li>
        <li>
          Dan beberapa attribute element HTML dengan JSX atau TSX pun dia
          berbeda
        </li>
        <li>
          Salah satu aturan jsx adalah kita hanya bisa mereturn satu element
          hmtl, dan caranya harus di bungkus menggunakan fragment atau element
          HTML
        </li>
      </ul>
    </section>
  );
}

// Section5
function Section5() {
  interface person {
    nama: string;
    noHp: number;
    usia: number;
    kelamin: string;
  }

  let salwa: person = {
    nama: "Ananda Salwa pratma",
    noHp: 628986372441,
    usia: 21,
    kelamin: "pria",
  };
  return (
    <>
      <h1 className={titleSec}>Ngoding JS di JSX</h1>
      <ul className={listStyle}>
        <li>Kita bisa gunakan kurung kurawal untuk ngoding js di JSX</li>
        <li>
          Perlu diinngat penggunaan kurung kurawal di JSX hanya bisa dilakukan
          pada dua lokasi
        </li>
        <li>Sebagai teks, seperti pada contoh sebelumnya</li>
        <li>
          sebagai nilai atribute pada tag element contoh seperti reusable style
          menggunakan tailwind lu itu
        </li>
      </ul>
      <p className="pl-2">Contoh : </p>
      <ul className="pl-2 ">
        <li>Nama : {salwa.nama}</li>
        <li>noHp : {salwa.noHp}</li>
        <li>usia : {salwa.usia}</li>
        <li>kelamin : {salwa.kelamin}</li>
      </ul>
    </>
  );
}
