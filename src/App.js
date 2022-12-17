import Navabar from './Navbar';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './Blogdetails';
import NotFound from './NotFound';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navabar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}>
            </Route>
            <Route path='/create' element={<Create />}>
            </Route>
            <Route path='/blog/:id' element={<BlogDetails />}>
            </Route>
            <Route path='*' element={<NotFound />}>

            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
