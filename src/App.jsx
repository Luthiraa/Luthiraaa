import React, { Suspense } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Icons from "./components/Icons"; 
import Project from "./components/Project"; 
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ProjectPage from "./components/ProjectPage";
import Work from "./components/Work";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Preloader from "./logo.svg";
import Footer from "./components/Footer";
function App() {
  return (
    <Suspense fallback={<Preloader />}> {/* Add Suspense with a fallback to your preloader */}
      <div className="App">
        <header className="App-header">
          <Parallax pages={10} style={{ top: "0", left: "0" }}>
            <ParallaxLayer
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Home />
            </ParallaxLayer>
            <ParallaxLayer offset={1}>
              <About /> 
            </ParallaxLayer>
            <ParallaxLayer offset={2}>
              <Work/>
            </ParallaxLayer>
            <ParallaxLayer offset={4}>
              <ProjectPage/>
            </ParallaxLayer>
            <ParallaxLayer offset={7.5}>
              <Gallery />
            </ParallaxLayer>
            <ParallaxLayer offset={9.92}>
              <Footer />
            </ParallaxLayer>
            <ParallaxLayer sticky={{ start: 0, end: 10}}>
              <Icons />
            </ParallaxLayer>
          </Parallax>
        </header>
      </div>
    </Suspense>
  );
}

export default App;