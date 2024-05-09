import './App.css';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import AboutMe from './components/AboutMe.js'
import ScrollSpy from './utils/ScrollSpy.js';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <ScrollSpy />
    </>
  );
}

export default App;
