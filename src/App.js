import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stack from "./components/techStack/Stack";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stacks" element={<Stack />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
