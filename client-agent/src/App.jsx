import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Search from './pages/Search'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route  path="/" element= {<Home />} />
            <Route  path="/add" element= {<Add />} />
            <Route  path="/search" element= {<Search />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
