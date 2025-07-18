import './App.css'
import { Routes, Route } from 'react-router-dom';
// Import the pages
import NotFound from './notFound';
import Home from './home';
import BlogPost from './blogPost';

function App() {

  return (
<Routes>
  <Route path="/" element={<Home />} />
      <Route path="/post/:slug" element={<BlogPost />} /> {/* dynamic url */}
      <Route path="*" element={<NotFound />} />
       
</Routes>

  )
}

export default App
