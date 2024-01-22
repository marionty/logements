import './App.css';
import Annonces from './Pages/Annonces/Annonces'
import Annonce from './Pages/Annonce/Annonce'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Template from './Partials/Template/Template'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/annonces" element={<Annonces />} />
          <Route exact path="/annonce" element={<Annonce />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
