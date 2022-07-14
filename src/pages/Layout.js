import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
    <p className="my-first"> 
          My first react app
        </p>
      <nav >
        <ul>
          <li>
            <Link to="/">react style changer</Link>
          </li>
          <li>
            <Link to="/blogs">Todo list</Link>
          </li>
          <li>
            <Link to="/contact">Contact me</Link>
          </li>
          <li>
            <Link to="/redux">redux wife & life manager</Link>
          </li>
        </ul>
      </nav>
      

      <Outlet />
    </div>
  )
};

export default Layout;