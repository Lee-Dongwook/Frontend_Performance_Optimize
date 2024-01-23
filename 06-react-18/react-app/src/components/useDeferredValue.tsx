import { memo, useState, useDeferredValue } from "react";

const SlowItem = ({ text }: { text: string }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {}

  return <li className="item">Text: {text}</li>;
};

const SlowItemList = memo(function SlowItemList({ text }: { text: string }) {
  let items = [];

  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }

  return <ul className="itmes">{items}</ul>;
});

export const UseDeferredValue = () => {
  const [text, setText] = useState<string>("");
  const deferredText = useDeferredValue(text);

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowItemList text={deferredText} />
    </>
  );
};
