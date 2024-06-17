import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Signup.jsx'
import Signin from './Signin'
import Appbar from './Appbar.jsx'
import './App.css'

function App() {
  return (
    <div style={{
      width:"100vw",
      height: "100vh",
      background: "#EEEEEE"
    }}>
      <Appbar />
     <Router>
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App;