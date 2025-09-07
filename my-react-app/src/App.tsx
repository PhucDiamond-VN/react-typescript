import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ltt_logo from './assets/logo_ltt.svg'
import Header from "./header";
import './App.css'
function App() {
  const [count, setcount] = useState("a");
  return (
    <>
      <div>
        <Header/>
      </div>
      <body>
        
      </body>
    </>
  );
}

export default App
