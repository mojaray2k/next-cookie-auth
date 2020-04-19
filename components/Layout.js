import Link from "next/link";

const Layout = ({ children, title }) => (
  <div className="root">
    <div className="navbar">
      <span>
        Welcome <strong>Guest</strong>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
          <button>Logout</button>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
      </span>
    </div>
    <h1>{title}</h1>
    {children}

    <style jsx>{`
      .root {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .navbar {
        width: 100%;
        display: flex;
        justify-content: space-around;
      }
      a {
        margin-right: 0.5em;
      }
      button {
        text-decoration: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        border-style: none;
        color: rgb(0, 0, 238);
      }
    `}</style>
  </div>
);

export default Layout;
