import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Items from './components/Items'

function App() {

  return (
    <div className='wrapper'>
      <div className='component'>
        <Header/>
        <Items/>
        <Footer/>
      </div>
    </div>
  )
}

export default App