import Stars from "./stars";

const Book = ({ title, image, isLast, authors }) => {
  return (
    <article className="flex max-height flex-col" id={isLast ? "last" : ""}>
      <img className="rounded-md h-2/3 w-full" src={image} alt={title} />

      <div className="flex flex-col  gap-row my-2 ">
        <p className="max-lines">{title.split(":" || ";")[0]}</p>
        <p className="max-lines">{authors[0]?.name}</p>
      </div>
      <Stars></Stars>
    </article>
  );
};

export default Book;
