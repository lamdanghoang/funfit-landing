import { LogsIcon, MailIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="p-6 flex justify-between items-center">
        <button className="px-8 py-5 flex text-white gap-2 items-center bg-sandow-gray-80 rounded-3xl">
          <MailIcon />
          <span className="font-semibold text-lg">Contact Us</span>
        </button>
        <button className="px-8 py-5 flex text-white gap-2 items-center bg-sandow-gray-80 rounded-3xl">
          <span className="font-semibold text-lg">Main Menu</span>
          <LogsIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
