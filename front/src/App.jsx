import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import BoardGames from './components/games/BoardGames.jsx';
import VideoGames from './components/games/VideoGames.jsx';
import About from './components/about';
import Contact from './components/contact';
import Register from './components/auth/Register.jsx';
import Login from './components/auth/Login';
import Dashboard from './components/auth/Dashboard';

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/board" element={<BoardGames />} />
            <Route path="/games/video" element={<VideoGames />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* ... autres routes */}
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  )
}

export default App
