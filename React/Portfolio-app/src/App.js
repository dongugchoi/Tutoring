import React, {useState} from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import FallingStars from "./components/FallingStars";
import HorizontalScroll from "./components/HorizontalScroll";
import ChatButton from "./components/ChatButton";
import Footer from "./components/Footer";



function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <FallingStars />
      <HorizontalScroll />
      <ChatButton setModalOpen={modalOpen}/>
      <div>
        <Header />
        <main>
          <About />
          <Skills />
          <Project setModalOpen={setModalOpen} modalOpen={modalOpen}/>
          <Contact />
        </main>
        <Footer/>
      </div>
    </>

  );
}

export default App;
