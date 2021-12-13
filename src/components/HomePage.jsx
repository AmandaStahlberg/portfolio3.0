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
        <SlidingFromLeftAnimation>
          <h1 className="slidingHeading">AMAND</h1>
        </SlidingFromLeftAnimation>
        <SlidingFromRightAnimation>
          <h1 className="slidingHeading">ASTÅH</h1>
        </SlidingFromRightAnimation>
        <SlidingFromLeftAnimation2>
          <h1 className="slidingHeading">LBERG</h1>
        </SlidingFromLeftAnimation2>
    </div>
  );
};

export default HomePage;
