import './App.css'
import 'tailwindcss/tailwind.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Atividades from './pages/Atividades';
import Contato from './pages/Contato';
import Frentes from './pages/Frentes';
import SobreNos from './pages/SobreNos';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/atividades' element={<Atividades/>}/>
          <Route exact path='/frentes' element={<Frentes/>}/>
          <Route exact path='/sobreNos' element={<SobreNos/>}/>
          <Route exact path='/contato' element={<Contato/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
