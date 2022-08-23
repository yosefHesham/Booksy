import BookList from "../components/books";
import Header from "../components/header";

import Poster from "../components/poster";
const Home = () => {
  return (
    <>
      <Header></Header>
      <Poster></Poster>
      <BookList></BookList>
    </>
  );
};

export default Home;
