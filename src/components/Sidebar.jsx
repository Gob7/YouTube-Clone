import "./Sidebar.css";
import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineAudio,
  AiOutlineCode,
  AiOutlineFire,
  AiOutlineLaptop,
} from "react-icons/ai";

export default function Sidebar() {
  return (
    <aside>
      <nav>
        <Link to="/">
          <AiFillHome /> Home
        </Link>
        <Link to="/trending">
          <AiOutlineFire />
          Trending
        </Link>
        <Link to="/music">
          <AiOutlineAudio />
          Music
        </Link>
        <Link to="/gaming">
          <AiOutlineLaptop />
          Gaming
        </Link>
        <Link to="/technology">
          <AiOutlineCode />
          Technology
        </Link>
      </nav>
    </aside>
  );
}
