import { listStyle, titleSec } from "../../script/styles";
import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ReactHook() {
  const codeSting1 = `
 const [count, setCount] = useState(0);
`;

  const codeString2 = `
 <div className="flex items-center justify-center gap-9 p-10">
        <button
            className="bg-slate-600 p-2 w-10 disabled:bg-slate-50 disabled:cursor-not-allowed"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            -
          </button>
          <p>{count}</p>
          <button
            className="bg-slate-600 p-2 w-10 "
            onClick={() => setCount(count + 1)}
          >
            +
        </button>
</div>
`;
  const [count, setCount] = useState(0);
  return (
    <section>
      <div className="container">
        <h1 className={titleSec}>React Hook</h1>
        <p>
          Dari Dokumentasi React, React Hook memungkinkan kita untuk menggunakan
          berbagai fitur react dari komponen kita, kita dapat menggunakan hook
          bawaan atau menggabungkannya untuk membangun fitur kita sendiri.
        </p>
        <p>Dibawah ini merupakan react hook menggunakan use State</p>
        <div className="flex items-center justify-center gap-9 p-10">
          <button
            className="bg-slate-600 p-2 w-10 disabled:bg-slate-50 disabled:cursor-not-allowed"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            -
          </button>
          <p>{count}</p>
          <button
            className="bg-slate-600 p-2 w-10 "
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>

        <p>Contoh code : </p>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {codeSting1}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {codeString2}
        </SyntaxHighlighter>

        <h1 className={titleSec}>Use Effect</h1>
        <Timer />
        <p>
          useEffect dipakai buat ngejalanin efek samping (side efek) di React
        </p>
        <ul className={`${listStyle}`}>
          <li>Update waktu tiap detik </li>
          <li>Fetch data dari API pas komponen muncul</li>
          <li>Ngedengerin event (resize, scroll, dll)</li>
          <li>Ngatur / bersihin interval, timeout, atau listener</li>
        </ul>

        <p>
          Jadi ngasih suruh react "bro jalanin perubahan berikut ini tanpa
          reload pages"
        </p>
      </div>
    </section>
  );
}

// react useEffect
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // effect khusus buat rollover detik → menit
  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((m) => m + 1);
    }
  }, [seconds]);

  // effect khusus buat rollover menit → jam
  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHours((h) => h + 1);
    }
  }, [minutes]);

  // effect khusus buat rollover jam → reset
  useEffect(() => {
    if (hours === 24) {
      setHours(0);
    }
  }, [hours]);

  return (
    <div className="flex items-center justify-center p-10  gap-2 ">
      <p>Timer : </p>
      <p className="bg-primary p-2 rounded-md">
        {hours.toString().padStart(2, "0")}
      </p>
      <p className="bg-primary p-2 rounded-md">
        {minutes.toString().padStart(2, "0")}
      </p>
      <p className="bg-primary p-2 rounded-md">
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}
