import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Wind, Home, History, Battery, Menu, X } from 'lucide-react';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import PowerUsagePage from './pages/PowerUsagePage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        {/* Navigation */}
        <nav className="bg-gray-900 border-b border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Wind className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold text-blue-400">AirVis</span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-300 hover:text-blue-400 flex items-center gap-2">
                  <Home size={20} />
                  Home
                </Link>
                <Link to="/history" className="text-gray-300 hover:text-blue-400 flex items-center gap-2">
                  <History size={20} />
                  History
                </Link>
                <Link to="/power-usage" className="text-gray-300 hover:text-blue-400 flex items-center gap-2">
                  <Battery size={20} />
                  Power Usage
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-blue-400"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-900">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/history"
                  className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  History
                </Link>
                <Link
                  to="/power-usage"
                  className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Power Usage
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/power-usage" element={<PowerUsagePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;