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
import Dashboard from './components/dashboard';
import GameDetails from './components/games/GameDetails';
import { DarkModeProvider, useDarkMode } from './components/commons/DarkModeContext';
import Sidebar from './components/header/Sidebar';
import { UserProvider } from './context/UserContext';
// import AdminRoute from './routes/AdminRoute';

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  )
}

function AppContent() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-neutral-900' : 'bg-white'}`}>
      <Router>
        <UserProvider>
          <Header />
          <div className='flex flex-row flex-grow'>
            <Sidebar />
            <div className="flex w-11/12 mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/boardgames" element={<BoardGames />} />
                <Route path="/videogames" element={<VideoGames />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/dashboard" element={<Dashboard />} requiredRole="admin" /> */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/games/:id" element={<GameDetails />} />
                {/* ... autres routes */}
              </Routes>
            </div>
          </div>
        </UserProvider>
      </Router>
      <Footer />
    </div>
  )
}

export default App
