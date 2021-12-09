import '../styles/homepage.css';
import {
  SlidingFromLeftAnimation,
  SlidingFromRightAnimation,
} from './animations';
//import Amanda from '../assets/Amanda.svg'
//import Amanda from '../assets/Component1.svg'

const HomePage = () => {
  return (
    <div className="Home">
      <div>
        <h1></h1>
        <h1>AS</h1>
        <h1></h1>
        <SlidingFromLeftAnimation>
          <h1>AMAND</h1>
        </SlidingFromLeftAnimation>
        <SlidingFromRightAnimation>
          <h1>ASTÅH</h1>
        </SlidingFromRightAnimation>
        <SlidingFromLeftAnimation>
          <h1>LBERG</h1>
        </SlidingFromLeftAnimation>
      </div>
    </div>
  );
};

export default HomePage;
