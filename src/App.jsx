import './App.css'
import { Logo } from './components/logo'
import { Leyenda } from './components/leyenda'
import { Titulo } from './components/titulo'
import { Footer } from './components/footer'

function App() {
  return (
    <article className="todo">
      <Logo />
      <Leyenda />
      <Titulo />
      <Footer />
    </article>
  )
}
export default App
