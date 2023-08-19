
import { useLocation } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/public/Home';
import PrivateFull from './layouts/PrivateFull';
import Group from './pages/private/Group';

function App() {
  const location = useLocation();
  return (
    <section className='font-body w-[100vw] h-[100vh] bg-red-300'>
      <Routes location={location} key={location.pathname} >
        <Route index element={<Home />} />

        <Route path="private" element={<PrivateFull />}>
          <Route path="group" element={<Group />} />
        </Route>

        <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
    </section>
  );
}

export default App;
