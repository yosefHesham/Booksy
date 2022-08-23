import useGetBooks from "../hooks/useGetBooks";
import Book from "./book";

const BookList = () => {
  const [data, error, loading] = useGetBooks();

  return (
    <section className="d-grid  mt-8 w-4/5 mx-auto" id="books">
      {" "}
      {data.map((book, i) => (
        <Book
          title={book.title}
          authors={book.authors}
          image={book.formats["image/jpeg"]}
          isLast={data.length - 1 === i}
        ></Book>
      ))}{" "}
      <dialog open={error !== null}>
        An error occurred while fetching books
      </dialog>
    </section>
  );
};

export default BookList;
