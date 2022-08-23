const baseUrl = "http://gutendex.com/books/";
const getBooks = async (pageNumber) => {
  const res = await fetch(`${baseUrl}?page=${pageNumber}`);
  const data = await res.json();
  return data;
};

export default getBooks;
