import '../styles/menu.css';
//import arrow from '../assets/arrow-down.png'
import arrow from '../assets/arrowDownone.png';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <img className="menuArrow" src={arrow} alt="menu-arrow" />
      <Link to="/">
        <h3>home</h3>
      </Link>
      <Link to="/about">
        <h3>about</h3>
      </Link>
      <Link to="/refrences">
        <h3>refrences</h3>
      </Link>
      <Link to="/skills">
        <h3>skills</h3>
      </Link>
      <Link to="/contact">
        <h3>contact</h3>
      </Link>
      <div className="emptyBox"></div>
    </nav>
  );
};

export default Menu;
