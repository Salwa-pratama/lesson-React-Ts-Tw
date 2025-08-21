import { listStyle, titleSec } from "../../script/styles";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CollectionComp = () => {
  const codeString1 = `
function ListShopping({
  item,
  isChecked,
}: {
  item: string;
  isChecked: boolean;
}) {
  return (
    <li>
      {item} {isChecked ? "✅" : "❌"}
    </li>
  );
}

  `;
  const codeString2 = `
 const items = [
    { item: "gula", isChecked: true },
    { item: "bubuk", isChecked: true },
    { item: "mentega", isChecked: false },
  ];

const itemsChecked = items.map((item, index) => {
    return <ListShopping {...item} key={index} />;
  });
  `;
  const codeString3 = `
<ul className={listStyle}>{itemsChecked}</ul>
  `;

  const items = [
    { item: "gula", isChecked: true },
    { item: "bubuk", isChecked: true },
    { item: "mentega", isChecked: false },
  ];

  const itemsChecked = items.map((item, index) => {
    return <ListShopping {...item} key={index} />;
  });
  return (
    <section>
      <div className="container">
        <h1 className={titleSec}>Collection Component</h1>
        <ul className={listStyle}>{itemsChecked}</ul>

        <h1> Contoh code</h1>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {codeString1}
        </SyntaxHighlighter>
        <p>Kode diatas merupakan Component yang akan kita looping</p>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {codeString2}
        </SyntaxHighlighter>
        <p>Setelah itu bikin data dan kita looping diluat element html</p>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {codeString3}
        </SyntaxHighlighter>

        <p>
          Dan begini cara manggilnya jangan lupa di return ya bro di bagian
          variabel itemsCheckednya
        </p>
        <br />
        <p>
          Dan jangan lupa buat gunain key komponent setiap kita melooping
          komponent atau element html
        </p>
        <p>
          dan itu disebut key komponent dia meerlukan nilai yang unique atau
          tidak sama seperti contoh diatas saya menambahkan index sebagai key
          komponentnya
        </p>
      </div>
    </section>
  );
};

export default CollectionComp;

function ListShopping({
  item,
  isChecked,
}: {
  item: string;
  isChecked: boolean;
}) {
  return (
    <li>
      {item} {isChecked ? "✅" : "❌"}
    </li>
  );
}
