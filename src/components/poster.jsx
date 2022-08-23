const Poster = () => {
  return (
    <section className="bg-bg rounded-xl flex justify-evenly mt-6 w-10/12 overflow-hidden mx-auto">
      <article className="flex flex-col justify-center gap-2">
        <h3 className="font-bold text-4xl text-primary">Build your library</h3>
        <p className="text-gray-600">
          Buy two selected books and get <br /> one for free
        </p>
        <div className="bg-secondary text-white cursor-pointer rounded-sm p-2 max-w-fit">
          View all
        </div>
      </article>

      <img src={require("./reader.png")} alt="reader" />
    </section>
  );
};

export default Poster;
