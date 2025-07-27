import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);

  return (
    <div className="items-center text-center ">
      <button
        className="cursor-pointer bg-sky-300 text-black p-2 rounded-full"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Tambah
      </button>

      <h1>Counter : {counter}</h1>
    </div>
  );
}
