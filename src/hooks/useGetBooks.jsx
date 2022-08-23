import { useEffect, useRef, useState } from "react";
import getBooks from "../services/books";

const fetchBooks = async ({
  setData,
  setError,
  setLoading,
  pageNumber,
  hasMore,
}) => {
  try {
    setLoading(true);
    const data = await getBooks(pageNumber);
    setData((prev) => [...prev, ...data["results"]]);
    setLoading(false);
    hasMore.current = data["next"] !== null;
  } catch (e) {
    setLoading(false);
    setError(e.toString());
  }
};

export default function useGetBooks() {
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const hasMore = useRef(true);

  useEffect(() => {
    if (hasMore.current) {
      fetchBooks({
        setData,
        setError,
        setLoading,
        pageNumber,
        setPageNumber,
        hasMore,
      });
    }
  }, [pageNumber]);

  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom - window.innerHeight < 10;
  };
  const trackScrolling = () => {
    const lastEl = document.getElementById("root");
    if (isBottom(lastEl) && !loading) {
      setPageNumber((prev) => prev + 1);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);

    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, error, loading, pageNumber];
}
