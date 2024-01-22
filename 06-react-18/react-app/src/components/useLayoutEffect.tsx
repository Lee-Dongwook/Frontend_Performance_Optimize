import { useState, useLayoutEffect } from "react";

export const UseLayoutEffect = () => {
  const [name, setName] = useState<string>("");

  useLayoutEffect(() => {
    setName("이동욱");
  }, []);

  return <div>안녕하세요! {name} 입니다.</div>;
};
