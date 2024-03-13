import { Route, Routes } from "react-router-dom"
// import Navbar from "./Navbar"
import LandingPage from "./Pages/LandingPage"
import EnrollNowPage from "./Pages/EnrollNowPage"
import NoPage from "./Pages/NoPage"
import Navbar from "./Navbar"

function App() {
  return (
    <div className=" bg-bg text-white overflow-hidden">

      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/enrollPage" element={<EnrollNowPage/>} />
        <Route path="*" element={<NoPage/>}/>
      </Routes>

    {/* <Body/> */}
    </div>
  )
}

export default App
