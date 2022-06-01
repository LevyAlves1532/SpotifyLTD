// LIBs
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// VIEWs
import { Home } from '../../views/home';
import { Create } from '../../views/create';
import { Success } from '../../views/success';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/success' element={<Success />} />
        <Route path='*' element={<span>NotFound</span>} />
      </Routes>
    </BrowserRouter>
  )
}