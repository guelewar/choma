import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Download from './pages/Download';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="download" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
