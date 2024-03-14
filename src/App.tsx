import { Route, Routes } from "react-router-dom"
// import Navbar from "./Navbar"
import LandingPage from "./Pages/LandingPage"
import EnrollNowPage from "./Pages/EnrollNowPage"
import NoPage from "./Pages/NoPage"
import Navbar from "./Navbar"
import AboutUsPage from "./Pages/AboutUsPage"
import ContactUsPage from "./Pages/ContactUsPage"

function App() {
  return (
    <div className=" bg-bg text-white overflow-hidden">

      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/enrollPage" element={<EnrollNowPage/>} />
        <Route path="/aboutUs" element={<AboutUsPage/>} />
        <Route path="/contactus" element={<ContactUsPage/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>

    {/* <Body/> */}
    </div>
  )
}

export default App
