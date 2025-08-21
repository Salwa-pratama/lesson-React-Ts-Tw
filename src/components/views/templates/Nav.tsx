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
    <section className="w-full ">
      <div className=" container ">
        {links.map((item, index) => (
          <a
            href={item.href}
            key={item.href || index}
            onClick={handleChange}
            className="w-full block items-center justify-center gap-2 p-4 my-2 rounded-md font-bold  bg-primary text-bg"
          >
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
