import { useEffect, useRef, useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // useRef gives a mutable value that:
  // * persists across renders
  // * does NOT trigger re-renders
  const requestIdRef = useRef(0);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setLoading(false);
      return;
    }

    const timeoutId = setTimeout(async () => {
      const requestId = ++requestIdRef.current;
      setLoading(true);

      try {
        const res = await fetch(`/api/search?q=${query}`);
        const data = await res.json();

        // Only update state if this is the latest request
        if (requestId === requestIdRef.current) {
          setResults(data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (requestId === requestIdRef.current) {
          setLoading(false);
        }
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      {loading && <p>Loading...</p>}

      {!loading && query && results.length === 0 && (
        <p>No results</p>
      )}

      <ul>
        {results.map((r) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
}
