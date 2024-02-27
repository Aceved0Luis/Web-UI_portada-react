import './App.css'
function App() {
  return (
    <>
      <article className="todo">
        <div className="imagen-principal">
          <img src="https://static.wikia.nocookie.net/logopedia/images/7/76/Ol%C3%A9_1996.svg" alt="logo ole" className="logo" />
        </div>
        <section className="separador">
          <div className="texto">
            <p>28 de noviembre de 2000, en el Estadio Nacional de Tokio.</p>
          </div>
        </section>
        <section className="titulo">
          <div className="semiti">
            <p>campeón intercontinental <strong>2000</strong></p>
          </div>
          <p className='color'>Boca</p>
        </section>
        <section className="footer">
          <p className="footer-texto">el mundo en tus manos</p>
        </section>
      </article>
    </>
  )
}
export default App
