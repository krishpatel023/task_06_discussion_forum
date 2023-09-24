import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp'
import HomePage from './pages/HomePage'
import SignIn from './pages/SignIn'
import AskQuestion from "./pages/AskQuestion";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/askquestion" element={<AskQuestion />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
