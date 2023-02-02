import './Styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Politics from '../src/Pages/Politics'
import WorldNews from '../src/Pages/WorldsNews'
import Business from '../src/Pages/Business'
import NavBar from './Components/NavBar'
import Entertainment from './Pages/Entertainment'
import DataContextProvider from './Context/DataContext'
import Sciences from './Pages/Sciences'
import Footer from './Components/Footer'

export function App() {

  return (
    <>

      <DataContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Entertainment />} />
            <Route path='/worldNew' element={<WorldNews />} />
            <Route path='/politics' element={<Politics />} />
            <Route path='/sciences' element={<Sciences />} />
            <Route path='/business' element={<Business />} />
            <Route path='/entertainment' element={<Entertainment />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </DataContextProvider>

    </>
  )
}

export default App
