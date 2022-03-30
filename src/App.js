
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Case_prisma from './Case_prisma'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Case_prisma" element={<Case_prisma />} />
        </Routes>
      </Router>
    </div>
	);
}

export default App;
