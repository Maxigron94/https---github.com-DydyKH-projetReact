import './App.css';
import './style.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Footer from './components/Footer';
import Catalogue from "./pages/Catalogue";
import Equipe from "./pages/Equipe";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" class="navigation" exact element={<Home />} />
          <Route path="/catalogue" exact element={<Catalogue />} />
          <Route path="/equipe" exact element={<Equipe />} />
          <Route path="/detail/:id" element={<Detail />} />

        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
