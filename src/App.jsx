import "./App.css";

function App() {
  return (
    <header>
      <div className="logo">
        <p>Patinhas Felizes</p>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
        </ul>
      </nav>

      <a href="#" className="botao-agendar">
        Agendar
      </a>
    </header>
  );
}

export default App;
