const Poster = () => {
  return (
    <section className="bg-bg rounded-lg flex justify-between mt-6 w-10/12 overflow-hidden mx-auto">
      <article>
        <h3>Build your library</h3>
        <p>
          Buy two selected books <br />
          and get one for free
        </p>
        <div className="text-secondary">View all</div>
      </article>

      <img src={require("./reader.png")} alt="reader" />
    </section>
  );
};

export default Poster;
