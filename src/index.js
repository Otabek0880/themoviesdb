import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/home/home.page';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<App/>}>
     <Route path='/' element={<HomePage/>} />
       <Route path='/movie' element={<>Movie page</>} />
       <Route path='/tv' element={<>TV page</>} />
       <Route path='/person' element={<>People page</>} />
       <Route path='*' element={<h1>Bunday sahifa topilmadi</h1>} />
     </Route>
   </Routes>
 </BrowserRouter>
);


