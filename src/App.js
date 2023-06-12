import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/common/heading/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import GamesHome from './components/games/GamesHome';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';

function App() {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/game' Component={GamesHome} />
        <Route path='/team' Component={Team} />
        <Route path='/contact' Component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
