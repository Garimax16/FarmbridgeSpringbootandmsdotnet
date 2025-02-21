import React from "react";
import "../styles/AboutUs.css"; // Ensure this contains updated styles
import {Footer} from './Footer';
import Navibar from './Navibar.js';


const AboutUs = () => {
  return (
    <div>
    <Navibar/>
    <div className="about-us">
      {/* Hero Section */}
      <div
  className="hero-section"
  style={{
    backgroundColor: '#333', // Very dark grey
    // padding: '100px 20px',
    textAlign: 'center',
  }}
>
  <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#fff' }}>About Us</h1>
  <p style={{ fontSize: '1.5rem', color: '#f4f4f4' }}>Facilitating the marketing of organic produce</p>
</div>

      {/* Card Section */}
      <div className="card-section">
        {/* Additional Cards */}
        {/* Card 6: Who We Are */}
        <div className="card">
          <img src="/images/who-we-are.jpg" alt="Who We Are" className="card-image" />
          <div className="card-content">
            <p>
              We are a passionate team dedicated to revolutionizing agriculture
              through the promotion of organic farming. Our mission is to
              connect farmers to global markets and create a sustainable future.
            </p>
          </div>
        </div>

        {/* Card 7: What We Give */}
        <div className="card">
          <img src="/images/what-we-give.jpg" alt="What We Give" className="card-image" />
          <div className="card-content">
            <p>
              We offer resources, guidance, and support to farmers. Our platform
              provides marketing tools, best practices, and a marketplace for
              organic products, ensuring fair and profitable transactions.
            </p>
          </div>
        </div>
      
        {/* Card 1 */}
        <div className="card">
          <img src="/images/organic-farmers.jpg" alt="Farmers" className="card-image" />
          <div className="card-content">
            <p>
              FarmBridge is a unique initiative aimed at connecting farmers with
              markets to promote organic farming globally. It serves as a
              one-stop solution for facilitating the trade of organic produce.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="/images/ecommerce-platform.jpg" alt="E-commerce Platform" className="card-image" />
          <div className="card-content">
            <p>
              FarmBridge acts as an E-commerce and knowledge platform. It
              includes resources like case studies, farming best practices, and
              success stories to encourage organic farming. The platform also
              offers a wide range of organic products.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src="/images/organic-products.jpg" alt="Organic Products" className="card-image" />
          <div className="card-content">
            <p>
              Buyers can access organic products at their doorstep at competitive
              prices. Farmers work tirelessly to provide the best organic
              produce, now made available to consumers via FarmBridge.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <img src="/images/connection.jpg" alt="Connection" className="card-image" />
          <div className="card-content">
            <p>
              FarmBridge connects stakeholders, including local councils,
              farmers, buyers, government agencies, and suppliers, to foster the
              development of organic farming.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card">
          <img src="/images/pricing-mechanisms.jpg" alt="Pricing Mechanisms" className="card-image" />
          <div className="card-content">
            <p>
              The platform supports farmers in discovering optimal prices for
              their produce through forward auctions, reverse auctions, and other
              pricing mechanisms.
            </p>
          </div>
        </div>
      </div>

     
    </div>
    <Footer/>
    </div>
  );
};

export default AboutUs;
