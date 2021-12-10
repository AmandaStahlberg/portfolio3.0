
import './App.css'
import ViewContainer from "./components/ViewContainer";
import {BrowserRouter as Router}  from 'react-router-dom';

const App = () => {
  return (
    <div className="wrapper">
      <Router>
      <ViewContainer/>
      </Router>
    </div>
  )

};

export default App;
