import "./App.css";

function App() {
  return (
    <>
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

      <section className="hero">
        <h1>Cuidado e carinho para o seu melhor amigo</h1>
        <p>
          Serviços de banho, tosa e muito mais, com todo carinho que seu pet
          merece.
        </p>
        <a href="#" className="botao-agendar">
          Agende uma visita
        </a>
      </section>
    </>
  );
}

export default App;
