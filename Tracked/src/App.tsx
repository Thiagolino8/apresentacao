import logo from '/logo.svg'
import './styles/App.css'
import { Count } from './components/Count'
import { Count2 } from './components/Count2'
import { Count3 } from './components/Count3'
import { Derived } from './components/Derived'
import {useStore} from './store'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Derived />
        <Count />
        <Count2 />
        <Count3 />
      </header>
      </div>
  )
}

export default App
