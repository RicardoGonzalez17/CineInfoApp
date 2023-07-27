import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App () {
  return (
    <>
      <Navbar />
      <div className='mt-5'>
        <Home />
      </div>
    </>
  )
}

export default App
