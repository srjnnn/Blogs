import { Routes, Route } from 'react-router-dom';
import NotFound from '../../Blogs/notFound/notFound';
import Home from '../Home/home';
import BlogPost from '../../blogPost';
// import ProjectDetails from './ProjectDetails'; 
import './App.css';
// impoting the blogs page 
import Phishnet from '../../Blogs/Phishnet/phishnet';
import AmityApp from '../../Blogs/Amity-App/amityApp';
import VolMatching from '../../Blogs/VolMatching/volMatching';
import Blood4life from '../../Blogs/Blood4Life/blood4life';
import PhishnetFeedbacks from '../../Blogs/Phishnet/phishnetFeedbacks';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:slug" element={<BlogPost />} />
      {/* <Route path="/project/:slug" element={<ProjectDetails />} /> */}
      <Route path="/projects/phishnet" element={<Phishnet />} />
      <Route path="/projects/amity-app" element={<AmityApp />} />
      <Route path="/projects/volmatching" element={<VolMatching />} />
      <Route path="/projects/blood4life" element={<Blood4life />} />
      <Route path="projects/phishnet/feedbacks" element={<PhishnetFeedbacks />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
