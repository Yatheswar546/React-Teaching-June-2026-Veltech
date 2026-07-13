import './App.css'
import Intro from './classes/01. Introduction/Intro.jsx';
import { Sub, Add } from './classes/01. Introduction/Named.jsx'

function App() {

  const a = 9;
  const b = 3;

  return (
    <>

      <Intro />

      <h1>Addition of {a} + {b} = {Add(a,b)}</h1>

      <h1>Subtraction of {a} - {b} = {Sub(a,b)}</h1>

    </>
  )

}

export default App
