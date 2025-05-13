import './App.css'
import Container from "react-bootstrap/Container";

import BarraNav from './components/BarraNav'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BarraNav/>
      <Container>
        <Outlet/>
      </Container>
    </div>
  )
}

export default App
