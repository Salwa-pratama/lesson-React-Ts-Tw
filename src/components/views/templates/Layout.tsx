import { Outlet } from "react-router-dom";

// Layout component
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const path = window.location.pathname;

  return (
    <div>
      {/* Header */}
      <Header />

      {path === "/" ? (
        <div></div>
      ) : (
        <div className="">
          <a href="/" className="w-full bg-primary p-4 block">
            Back Home
          </a>
        </div>
      )}
      <main className="border scrollbar-hide scroll-smooth overflow-auto h-[900px] p-10 border-black m-5 mx-auto ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
