import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Download from './pages/Download';
import DownloadDetail from './pages/Download/DownloadDetail';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="download" element={<Download />} />
        <Route path="detail" element={<DownloadDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
