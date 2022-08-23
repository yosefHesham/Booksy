import LoveIcon from "../icons/loveIcon";

const { default: SearchIcon } = require("../icons/searchIcon");

const SearchHeader = () => {
  return (
    <section className="header-section flex justify-between mt-9">
      <h1 className="ml-7 text-2xl font-black">Booksy</h1>
      <article className="bg-gray-200 w-2/5 flex justify-between items-center px-7 rounded-md">
        <input
          className="bg-gray-200  w-11/12"
          placeholder="Search by author,title,name"
        />
        <SearchIcon></SearchIcon>
      </article>

      <article className="flex  gap-5 items-center mr-7">
        <LoveIcon></LoveIcon>
        <div className="rounded-full bg-primary w-9 h-9 flex  items-center justify-center text-white ">
          O
        </div>
        <p>EN</p>
      </article>
    </section>
  );
};

export default SearchHeader;
