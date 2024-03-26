import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Create from './Component/Create';
import Read from './Component/Read';
import Update from './Component/Update';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='/read/:id' element={<Read/>}/>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
