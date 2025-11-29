import { Toaster } from 'sonner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MarketPage from './pages/MarketPage';
import WeatherPage from './pages/WeatherPage';
import ForumPage from './pages/ForumPage';
import KnowledgePage from './pages/KnowledgePage';
import AuthPage from './pages/AuthPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Toaster />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/knowledge" element={<KnowledgePage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}