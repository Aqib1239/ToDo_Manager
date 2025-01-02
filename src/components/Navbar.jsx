import { FaTasks } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full top-0 bg-gray-800 text-white p-4 flex justify-between items-center shadow-xl shadow-gray-400">
      {/* Logo and title */}
      <div className="flex items-center cursor-pointer">
          <FaTasks className="mr-2 ml-2 text-3xl text-yellow-500" />
          <span className="text-2xl font-bold">ToDo Manager</span>
      </div>

      {/* Logged-in User profile */}
      <div>
        <ul className="flex items-center cursor-pointer">
          <FaUserCircle size={40} className="mr-1 text-yellow-500" />
          <h3 className="text-lg font-semibold mr-2">John Doe</h3>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
