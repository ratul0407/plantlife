import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className="p-6">
      <header className="flex justify-between">
        {/* menu button */}
        <button className="flex items-center gap-2">
          <IoMenu className="h-6 w-6" />
          <span className="text-lg">Menu</span>
        </button>
        {/* heading Logo */}
        <h3 className="font-satisfy text-3xl">Plant Life</h3>
        <button className="border border-gray-50 px-2 hover:bg-gray-50 hover:text-black transition-all duration-300 cursor-pointer">
          Login
        </button>
      </header>
    </div>
  );
};
