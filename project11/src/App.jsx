import './App.css'
import Hero from './Hero.jsx'

function App() {
  return (
    <>
      {/* <Hero /> */}
      <Hero thisText="This is children text">
        <h2>This is a second Hero component</h2>
      </Hero>
    </>
  )
}

export default App
