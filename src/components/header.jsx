const { default: SearchIcon } = require("../icons/searchIcon");

const Header = () => {
  return (
    <section>
      <h1>Booksy</h1>
      <article>
        <input placeholder="Search by author,title,name"> </input>
        <SearchIcon></SearchIcon>
      </article>
    </section>
  );
};

export default Header;
