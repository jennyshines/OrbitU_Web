import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import ListingDetail from './pages/ListingDetail';
import ListFlow from './pages/ListFlow';
import RequestToSublet from './pages/RequestToSublet';
import Dashboard from './pages/Dashboard';
import Payments from './pages/Payments';
import Verify from './pages/Verify';
import Messages from './pages/Messages';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/list" element={<ListFlow />} />
        <Route path="/request" element={<RequestToSublet />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </HashRouter>
  );
}
