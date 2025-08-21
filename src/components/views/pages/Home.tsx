import Nav from "../templates/Nav";
import { links } from "../../../data/links";

export default function Home() {
  return (
    <>
      <Nav
        // Ini contoh props
        links={links}
        containerStyle="bg-stone-800 text-white p-4"
        linkClass="text-bold hover:text-sky-300"
      />
    </>
  );
}
