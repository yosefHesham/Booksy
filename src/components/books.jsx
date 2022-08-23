import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGetBooks from "../hooks/useGetBooks";

const BookList = () => {
  const [data, error, loading, pageNumber] = useGetBooks();
  return (
    <section className="d-grid  mt-8 w-4/5 mx-auto" id="books">
      {" "}
      {data.map((book, i) => {
        return (
          <article
            className="flex flex-col"
            id={i === data.length - 1 ? "last" : ""}
          >
            <img
              className="rounded-md h-2/3 w-full"
              src={book.formats["image/jpeg"]}
              alt={book.title}
            />

            <div className="flex flex-col  gap-row my-2 ">
              <p className="max-lines">{book.title.split(":" || ";")[0]}</p>
              <p className="max-lines">{book.authors[0]?.name}</p>
            </div>
            <div className="flex justify-start gap-2">
              {[1, 2, 3, 4].map((n) => (
                <FontAwesomeIcon icon="fa-solid fa-star" color="orange" />
              ))}
            </div>
          </article>
        );
      })}{" "}
    </section>
  );
};

export default BookList;
