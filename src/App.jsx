import { Navbar } from "./components/Navbar"
import Banner from "./components/Banner"
import { Outlet } from "react-router"


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Outlet />
    </div>
  )
}

export default App
