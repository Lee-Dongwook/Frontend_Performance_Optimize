import {
  useEffect,
  useSyncExternalStore,
  startTransition,
  useState,
} from "react";

let data = 1;

const getData = () => {
  return data;
};

setTimeout(() => (data = 2), 100);

const DataPiece = () => {
  let start = Date.now();
  while (Date.now() - start < 50) {}

  const data = useSyncExternalStore(() => {
    return () => {};
  }, getData);

  return <div style={{ padding: "1rem", border: "1px solid red" }}>{data}</div>;
};

export const UseSyncExternalStore = () => {
  const [showDatePiece, setShowDatePiece] = useState(false);

  useEffect(() => {
    startTransition(() => setShowDatePiece(true));
  }, []);

  return (
    <>
      {showDatePiece ? (
        <div style={{ display: "flex", gap: "1rem" }}>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <DataPiece key={index} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
