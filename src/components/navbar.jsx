import { NavLink, Router } from "react-router-dom";

const navLinks = [
  {
    path: "/",
    id: 1,
    text: "Home",
  },

  { path: "/missions", id: 2, text: "Bestseller" },

  { path: "/profile", id: 4, text: "Category" },
  { path: "/profile", id: 5, text: "Find a store" },
  { path: "/profile", id: 6, text: "Blog" },
];

function Navbar() {
  return (
    <ul className="flex gap-5  justify-center mt-6">
      {navLinks.map((link) => (
        <li
          key={link.id}
          style={{
            fontWeight: "bold",
            listStyle: "none",
          }}
        >
          <button
            to={link.path}
            className={`${link.id === 1 ? "text-primary" : "text-gray-300"}`}
          >
            {" "}
            {link.text}
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Navbar;
