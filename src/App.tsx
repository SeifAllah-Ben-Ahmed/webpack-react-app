import './styles.css'
import Logo from './logo.svg'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      <img src={Logo} alt="logo" height="500px" width="500px" />
      <h1>Webpack React Template --{process.env.NODE_ENV}</h1>

      <Counter />
    </div>
  )
}
export default App
