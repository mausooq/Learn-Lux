import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Signup.jsx'
import Signin from './Signin'
import Appbar from './Appbar.jsx'
import AddCourse from './Addcourse.jsx'
import Courses from './Courses.jsx'
import './App.css'

function App() {
  return (
    <div style={{
      width:"100vw",
      height: "100vh",
      background: "#EEEEEE",
    }}>
     <Router>
            <Routes>
                <Route path="/admin/addcourse" element={<>
                <Appbar /> 
                <AddCourse />
                </>} />
                <Route path="/admin/courses" element={<>
                <Appbar /> 
                <Courses />
                </>} />
                <Route path="/admin/signin" element={
                  <><Appbar />     
                  <Signin /></>
                }/>
                <Route path="/admin/signup" element={
                 <><Appbar />
                  <Signup/></> 
                }/>
            </Routes>
        </Router>
    </div>
  )
}

export default App;