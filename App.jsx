import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Internships from "./pages/Internships";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import Forum from "./pages/Forum";
import Login from "./auth/Login";

export default function App() {
  return (
    <div className='font-sans bg-white min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/internships' element={<Internships />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}
