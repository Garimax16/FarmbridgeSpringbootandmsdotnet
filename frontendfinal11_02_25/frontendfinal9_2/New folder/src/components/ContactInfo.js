
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <>
      <h3 className="mb-4">Get in Touch</h3>
      <div className="d-flex flex-column gap-4">
        <div className="d-flex align-items-start gap-3">
          <FaMapMarkerAlt className="mt-1" size={20} color="#0d6efd" />
          <div>
            <h5 className="mb-1">Address</h5>
            <p className="mb-0">123 Business Street<br />Mumbai Maharashta, 400078</p>
          </div>
        </div>
        
        <div className="d-flex align-items-start gap-3">
          <FaPhone className="mt-1" size={20} color="#0d6efd" />
          <div>
            <h5 className="mb-1">Phone</h5>
            <p className="mb-0">+91 797708182</p>
          </div>
        </div>
        
        <div className="d-flex align-items-start gap-3">
          <FaEnvelope className="mt-1" size={20} color="#0d6efd" />
          <div>
            <h5 className="mb-1">Email</h5>
            <p className="mb-0">FarmBridgesupport@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;


