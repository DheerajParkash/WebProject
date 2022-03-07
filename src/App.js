
import './App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/About';
import Footer from './components/footer';
import Farming from './components/Farming';
import Shop from './shop';
import ShopDetails from './ShopDetails';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDeatils';
import Contact from './components/Contacts';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="farming" element={<Farming />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>   
	  // Rotuing done
      <Footer/>
    </>
    
  );
}

export default App;
