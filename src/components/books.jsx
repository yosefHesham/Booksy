import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGetBooks from "../hooks/useGetBooks";

const BookList = () => {
  const [data, error, loading, pageEnd] = useGetBooks();
  return (
    <section className="d-grid  mt-8 w-4/5 mx-auto">
      {" "}
      {data.map((book, i) => {
        return (
          <article
            className="max-h-fit"
            ref={i === data.length - 1 ? pageEnd : null}
          >
            <img
              className="rounded-md h-4/5"
              src={book.formats["image/jpeg"]}
              alt={book.title}
            />

            <div className="h-1/4 flex-col ">
              <p className="max-lines">{book.title.split(":" || ";")[0]}</p>
              <p className="max-lines">{book.authors[0]?.name}</p>
              {[1, 2, 3, 4].map((n) => (
                <FontAwesomeIcon icon="fa-solid fa-star" color="yellow" />
              ))}
            </div>
          </article>
        );
      })}{" "}
    </section>
  );
};

export default BookList;
