import Loadable from "react-loadable";

const Footer = Loadable({
  loader: () => import("./Footer"),
  loading: () => <div>Loading Footer...</div>,
});

export default function Header() {
  const preloadFooter = () => {
    Footer.preload();
  };

  return (
    <div>
      <h1>Header</h1>
      <nav>
        <button onClick={preloadFooter}>Preload Footer</button>
      </nav>
    </div>
  );
}
