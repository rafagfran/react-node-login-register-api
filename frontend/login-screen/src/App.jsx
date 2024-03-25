import Register from './components/Register.jsx'
import Login from "./components/Login.jsx"
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes> 
    </>
  )
}

export default App
