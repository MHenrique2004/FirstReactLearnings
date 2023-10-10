import { BrowserRouter, Routes, Route } from "react-router-dom"
import Titulo from "./Titulo"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Final from "./pages/Final"
import Contato from "./pages/Contato"

export default function App() {

  return (

    <div>
      <Titulo cor="red" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/final" element={<Final />}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
};

