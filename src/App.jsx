import './App.css'
function App() {
  return (
    <>
      <article class="todo">
        <section className="imagen">
          <div className="imagen-principal">
            <img src="https://static.wikia.nocookie.net/logopedia/images/7/76/Ol%C3%A9_1996.svg" alt="logo ole" className="logo" />
          </div>
        </section>
        <section className="separador">
          <div className="texto">
            <p>28 de noviembre de 2000, en el Estadio Nacional de Tokio.</p>
          </div>
        </section>
        <section className="titulo">
          <div className="titulo-div">
            <div className="semiti">
              <p>campeón intercontinental <strong>2000</strong></p>
            </div>
            <p>Boca</p>
          </div>
        </section>
        <section className="footer">
          <div className="footer-div">
            <p>el mundo en tus manos</p>
          </div>
        </section>
      </article>
    </>
  )
}
export default App
