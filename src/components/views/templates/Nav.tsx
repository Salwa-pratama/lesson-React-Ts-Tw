// Ini harus membuat interface dulu menggunakan TypeScript
interface NavProps {
  links: {
    href: string;
    label: string;
  }[];
  containerStyle?: String;
  linkClass?: string;
}
import { useNavigate } from "react-router-dom";

export default function Nav({
  // Navigation tanpa reload
  links,
}: NavProps) {
  const navigate = useNavigate();
  const handleChange = (e: any) => {
    const selectedPath = e.target.value;
    navigate(selectedPath);
  };
  return (
    <div
      className={`flex justify-center m-1 space-x-4 font-bold overflow-x-auto bg-stone-800 text-white p-4`}
    >
      <a href="/">Home</a>
      <label htmlFor="lessons">Lessons : </label>
      <select
        name="lessons"
        id="lessons"
        className="text-black bg-sky-600 rounded font-bold"
        onChange={handleChange}
      >
        {links.map((link, index) => (
          <option key={link.href || index} value={link.href}>
            {link.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// <a href={link.href} key={index} className={linkClass}>
//   {link.label}
// </a>
