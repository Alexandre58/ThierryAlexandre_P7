import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Home">Blogs</Link>
          </li>
          <li>
            <Link to="/Profil">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};