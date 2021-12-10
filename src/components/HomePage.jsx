import '../styles/homepage.css';
import {
  SlidingFromLeftAnimation,
  SlidingFromLeftAnimation2,
  SlidingFromRightAnimation,
} from './animations';
//import Amanda from '../assets/Amanda.svg'
//import Amanda from '../assets/Component1.svg'

const HomePage = () => {
  return (
    <div className="Home">
      <div>
        <SlidingFromLeftAnimation>
          <h1>AMAND</h1>
        </SlidingFromLeftAnimation>
        <SlidingFromRightAnimation>
          <h1>ASTÅH</h1>
        </SlidingFromRightAnimation>
        <SlidingFromLeftAnimation2>
          <h1>LBERG</h1>
        </SlidingFromLeftAnimation2>
      </div>
    </div>
  );
};

export default HomePage;
