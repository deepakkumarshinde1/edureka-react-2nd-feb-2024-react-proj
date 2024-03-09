import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <section className="page-not-found">
        <p>Page Not Found :/</p>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path
            d="M30,1h40l29,29v40l-29,29h-40l-29-29v-40z"
            stroke="#000"
            fill="none"
          />
          <path d="M31,3h38l28,28v38l-28,28h-38l-28-28v-38z" fill="#a23" />
          <text x="50" y="68" font-size="48" fill="#FFF" text-anchor="middle">
            410
          </text>
        </svg>
        <Link to="/">Go To Home</Link>
      </section>
    </>
  );
};

export default PageNotFound;
