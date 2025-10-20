import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-blue-50 to-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Student Portal</h1>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">
            Login
          </Link>
          <Link to="/signup" className="text-gray-700 hover:text-blue-600">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
