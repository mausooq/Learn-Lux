import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup.jsx';
import Signin from './Signin';
import Appbar from './Appbar.jsx';
import AddCourse from './Addcourse.jsx';
import Courses from './Courses.jsx';
import './App.css';
import EditCourse from './EditCourse.jsx';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Landing from './Landing.jsx';

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#EEEEEE" }}>
      <RecoilRoot>
      <Router>
        <Appbar /> 
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/admin/signup" element={<Signup />} />
          <Route path="/admin/signin" element={<Signin />} />
          <Route path="/admin/courses" element={<Courses />} />
          <Route path="/admin/addcourse" element={<AddCourse />} />
          <Route path="/admin/editcourse/:courseId" element={<EditCourse />} />
        </Routes>
      </Router>
     </RecoilRoot>
    </div>
  );
}

export default App;
