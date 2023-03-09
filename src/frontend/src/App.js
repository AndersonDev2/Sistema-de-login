import { Routes, Route, useNavigate } from "react-router-dom";
import CriarConta from "./paginas/CriarConta/CriarConta.jsx";
import Login from "./paginas/Login/Login.jsx";
import EsqueceuSenha from "./paginas/EsqueceuSenha/EsqueceuSenha.jsx";
import MinhaConta from "./paginas/MinhaConta/MinhaConta.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/criar-conta" element={<CriarConta />} />
      <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
      <Route path="/minha-conta" element={<MinhaConta />} />
    </Routes>
  );
}

export default App;
