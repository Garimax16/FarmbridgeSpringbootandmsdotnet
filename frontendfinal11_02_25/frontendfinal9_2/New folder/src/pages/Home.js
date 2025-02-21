import { Navbar } from 'react-bootstrap';
import Navibar from '../components/Navibar.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HeaderHome } from '../components/HeaderHome.js';
import CarouselImg  from '../components/CarouselImg.js';
import MidSection from '../components/MidSection.js';
import { Footer } from '../components/Footer.js';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../components/Testimonials.jsx';

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/'); 
      };
    
  return (
    
    <div>
    <HeaderHome/>
    <Navibar/>
    <CarouselImg/>
    <MidSection/>
    <Testimonials/>
    <Footer/>
    </div>

  );
}

   
export default Home;