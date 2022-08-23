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
          className="list-none font-bold flex flex-col items-center"
        >
          <button
            to={link.path}
            className={`${link.id === 1 ? "text-primary" : "text-gray-300"}`}
          >
            {" "}
            {link.text}
          </button>
          {link.id === 1 && (
            <div className=" w-2 h-2 rounded-full bg-primary shadow-black shadow-2xl"></div>
          )}
        </li>
      ))}
    </ul>
  );
}
export default Navbar;
