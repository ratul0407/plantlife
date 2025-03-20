import { IoMenu } from "react-icons/io5";
import { Button } from "./Button/Button";
import { Menu } from "./Menu/Menu";

export const Navbar = () => {
  return (
    <div className="px-10 py-12">
      <header className="flex justify-between items-start">
        {/* menu button */}
        <button className="flex items-center gap-2">
          <IoMenu className="h-6 w-6" />
          <span className="text-lg">Menu</span>
        </button>
        {/* heading Logo */}
        <h3 className="font-satisfy text-3xl">Plant Life</h3>
        <div className="relative">
          <Menu />
          <Button />
        </div>
      </header>
    </div>
  );
};
