import { useState } from "react";

import "./App.css";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import HeaderLeft from "./Components/HeaderLeft";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft />
        <main className="flex-[3] ">
          <Home />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
