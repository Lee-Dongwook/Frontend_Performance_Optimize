import {
  type ChangeEvent,
  useCallback,
  useState,
  useTransition,
  useEffect,
} from "react";

export const UseTransition = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, startTransition] = useTransition();

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setName(e.target.value);
      setResult(e.target.value + "의 결과");
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <div>{count}</div>
      <input value={name} onChange={onChange} />
      {name
        ? Array(100)
            .fill("")
            .map((_, idx) => <div key={idx}>{result}</div>)
        : null}
    </div>
  );
};
