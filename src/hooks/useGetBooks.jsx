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
    hasMore.current = data["next"] !== null;
  } catch (e) {
    setError(e.toString());
  }
};

export default function useGetBooks() {
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const hasMore = useRef(true);
  const pageEnd = useRef(null);

  useEffect(() => {
    console.log(pageNumber);
    if (hasMore.current) {
      fetchBooks({ setData, setError, setLoading, pageNumber, setPageNumber });
    }
  }, [pageNumber]);

  useEffect(() => {
    if (data && data.length !== 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            console.log("hmmm");
            setPageNumber((prev) => prev + 1);
            if (!hasMore.current) {
              observer.unobserve();
            }
          }
        },
        { threshold: 1 }
      );
      if (pageEnd.current) {
        console.log(pageEnd.current);
        observer.observe(pageEnd.current);
      }
    }
  }, [data]);

  return [data, error, loading, pageEnd];
}
