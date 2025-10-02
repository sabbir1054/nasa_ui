import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Upload from './pages/Upload'
import Merge from './pages/Merge'
import Training from './pages/Training'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/merge" element={<Merge />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
