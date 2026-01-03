import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
