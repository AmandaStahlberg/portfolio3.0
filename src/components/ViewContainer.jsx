import HomePage from './HomePage';
import Amanda from '../assets/img/Component1.svg';
import '../styles/viewcontainer.css';
import Menu from './Menu';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Refrences from './Refrences';
import Contact from './Contact';

const ViewContainer = () => {
  return (
    <>
      <Menu />
      <div className="viewContainer">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/refrences">
            <Refrences />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <div className="imgDiv">
          <img
            className="Amanda"
            src={Amanda}
            alt="Illustration made by Amanda Ståhlberg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewContainer;
