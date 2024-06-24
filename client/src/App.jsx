import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup.jsx';
import Signin from './Signin';
import Appbar from './Appbar.jsx';
import AddCourse from './Addcourse.jsx';
import Courses from './Courses.jsx';
import './App.css';
import EditCourse from './EditCourse.jsx';

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#EEEEEE" }}>
      <Router>
        <Appbar /> 
        <Routes>
          <Route path="/admin/editcourse/:courseId" element={<EditCourse />} />
          <Route path="/admin/addcourse" element={<AddCourse />} />
          <Route path="/admin/courses" element={<Courses />} />
          <Route path="/admin/signin" element={<Signin />} />
          <Route path="/admin/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
