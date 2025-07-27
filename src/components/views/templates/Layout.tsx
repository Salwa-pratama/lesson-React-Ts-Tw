import { Outlet } from "react-router-dom";

// Layout component
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div>
      {/* Header */}
      <Header />
      <Nav
        // Ini contoh props
        links={[
          { label: "Lesson 1", href: "/L1" },
          { label: "Lesson 2", href: "/L2" },
          { label: "Lesson 3", href: "/L3" },
          { label: "Lesson 4", href: "/L4" },
        ]}
        containerStyle="bg-stone-800 text-white p-4"
        linkClass="text-bold hover:text-sky-300"
      />
      <main className="border scrollbar-hide scroll-smooth overflow-auto h-[900px] p-10 border-black m-5 mx-auto w-[750px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
