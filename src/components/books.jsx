import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGetBooks from "../hooks/useGetBooks";

const BookList = () => {
  const [data, error, loading, pageEnd] = useGetBooks();
  return (
    <section className="d-grid">
      {" "}
      {data.map((book, i) => {
        return (
          <article ref={i === data.length - 1 ? pageEnd : null}>
            <img
              className="rounded-md  h-56"
              src={book.formats["image/jpeg"]}
              alt={book.title}
            />

            <p>{book.title}</p>
            <p>{book.authors.map((author) => author.name).join(", ")}</p>
            {[1, 2, 3, 4].map((n) => (
              <FontAwesomeIcon icon="fa-solid fa-star" color="yellow" />
            ))}
          </article>
        );
      })}{" "}
    </section>
  );
};

export default BookList;
