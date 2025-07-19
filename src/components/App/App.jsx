import { Routes, Route } from 'react-router-dom';
import NotFound from '../../Blogs/notFound/notFound';
import Home from '../Home/home';
import BlogPost from '../../blogPost';
// import ProjectDetails from './ProjectDetails'; 
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:slug" element={<BlogPost />} />
      {/* <Route path="/project/:slug" element={<ProjectDetails />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
