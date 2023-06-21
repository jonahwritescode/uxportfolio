import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EnsembleProject from './components/EnsembleProject';
import TraceProject from './components/TraceProject';
import ThermoKingProject from './components/protected/ThermoKingProject';
import PortfolioProject from './components/PortfolioProject';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <div className="bg-black">
        <Navbar></Navbar>
        <Switch>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/EnsembleProject">
            <EnsembleProject></EnsembleProject>
          </Route>
          <Route path="/TraceProject">
            <TraceProject></TraceProject>
          </Route>
          <Route path="/ThermoKingProject">
            <ThermoKingProject></ThermoKingProject>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>      
        <div id="success_toast" className="bg-black border border-gray-700 shadow-lg fixed top-16 md:top-20 left-4 z-30 flex flex-row opacity-0">
            <div className="border-r border-gray-700 p-3 text-white text-2xl"><i className="fas fa-check-circle"></i></div>
            <p className="text-white align-middle my-auto mx-4 font-semibold">Your message has been sent. I'll be in touch soon!</p>
        </div>
        <footer className="bg-gray-900 border-t border-gray-800 flex py-12">
            <div className="grid md:grid-cols-2 gap-6 mx-auto">
              <div className="flex flex-col w-80">
                <p className="text-white font-semibold font-display text-xl pb-2">Projects</p>
                <hr className="w-14 mb-2 border-gray-700"></hr>
                <Link to="/ThermoKingProject" className="text-brandGreen hover:underline text-lg pb-2" href="#">Designing a New Mobile Experience for Thermo King Customers</Link>
                <Link to="/EnsembleProject" className="text-brandGreen hover:underline text-lg pb-2" href="#">Redesigning User Permissions for Tracer® Ensemble®</Link>
                <Link to="/TraceProject" className="text-brandGreen hover:underline text-lg" href="#">Building a daylighting analysis tool in Trace 3D Plus</Link>
              </div>
              <div className="flex flex-col w-80 mx-auto">
                <p className="text-white font-semibold font-display text-xl pb-2">Credits</p>
                <hr className="w-14 mb-2 border-gray-700"></hr>
                <p className="text-gray-200 text-lg pb-2">This site was designed, developed, and tested by Jonah Miller in 2023.</p>
              </div>
            </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
