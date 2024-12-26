import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const navItems = [
  {
    title: "About Us",
    url: "/",
  },
  {
    title: "Features",
    url: "/",
  },
  {
    title: "Pricing",
    url: "/",
  },
  {
    title: "Log in",
    url: "/",
  },
  {
    title: "Sign up",
    url: "/",
  },
];

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)}>
          <IoMenu className="size-7" />
        </button>
      ) : (
        <>
          <button onClick={() => setIsOpen(false)}>
            <IoClose className="size-7" />
          </button>

          <div className="absolute left-0 w-full top-20 bg-white/60 backdrop-blur-lg border-b border-t">
            <ul className="flex flex-col py-4 items-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="block text-gray-700 p-3 hover:bg-gray-600 dark:hover:text-white">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Menu;
