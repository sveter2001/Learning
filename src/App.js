import logo from './logo.svg';
import './App.css';
import case_prisma from './custom_src/case_prisma.png'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Case_prisma from './Case_prisma'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Рулетка</p>
      </header>
	  <body className="font_case">
	  <img src={case_prisma} className="case_prisma-logo"  />
	  <p>Призма кейс</p>
	</body>

	<Router>
		<Routes>
			<Route exact path="/case_prisma" component={Case_prisma}/>
		</Routes>
	</Router>
	    </div>
	);
}

export default App;
