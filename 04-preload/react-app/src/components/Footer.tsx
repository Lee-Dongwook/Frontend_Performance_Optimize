import Loadable from "react-loadable";

const Header = Loadable({
  loader: () => import("./Header"),
  loading: () => <div>Loading Header...</div>,
});

export default function Footer() {
  const prefetchHeader = () => {
    Header.preload();
  };

  return (
    <div>
      <h1>Footer</h1>
      <p>Made By DongWook</p>
      <button onClick={prefetchHeader}>Prefetch Header</button>
    </div>
  );
}
