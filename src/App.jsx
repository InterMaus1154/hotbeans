
import "./style/App.css";

import{Route, Routes, useLocation} from 'react-router-dom';
import { useEffect, useState } from "react";

import { courses } from "./assets/courses";
import { jobs } from "./assets/jobs";

import { FORM_TYPES } from "./components/Form";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Members from "./pages/Members";
import Services from "./pages/Services";
import Application from "./pages/Application";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import ApplicationPage from "./pages/ApplicationPage";
import NotFound from "./pages/404";


const App = () => {


  
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname == "/");

  useEffect(() => {
    setIsHome(current => current=location.pathname === "/");
  }, [location]);


  return (
    <div className="App">
      <Header isHome={isHome} className={isHome ? "Header--home" : "Header--default"}/>
      <Routes>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/members" element={<Members/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/application" element={<Application/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route> 
        {
          courses.map(course =>{
            return <Route  path={`/courses/${course.target}`} element={<ApplicationPage currentCourse={course} type={FORM_TYPES.COURSE}/>}></Route>
          })
        }
        {
          jobs.map(job =>{
            return <Route path={`/jobs/${job.target}`} element={<ApplicationPage currentJob={job} type={FORM_TYPES.JOB}/>}></Route>
          })
        }
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
