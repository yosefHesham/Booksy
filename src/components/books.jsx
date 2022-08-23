import useGetBooks from "../hooks/useGetBooks";
import Book from "./book";
import SkeletonList from "./skeletonList";

const BookList = () => {
  const [data, error, loading, pageNumber] = useGetBooks();

  return (
    <>
      <section className="d-grid  mt-8 w-4/5 mx-auto relative" id="books">
        {" "}
        <SkeletonList show={loading && data.length === 0}></SkeletonList>
        {data.map((book, i) => (
          <Book
            title={book.title}
            authors={book.authors}
            image={book.formats["image/jpeg"]}
            isLast={data.length - 1 === i}
          ></Book>
        ))}{" "}
        <SkeletonList show={loading && data.length > 0}></SkeletonList>
        <dialog open={error !== null} className="absolute">
          An error occurred while fetching books
        </dialog>
      </section>
    </>
  );
};

export default BookList;
