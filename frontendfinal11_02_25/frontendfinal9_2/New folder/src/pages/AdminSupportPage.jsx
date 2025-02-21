// import { Container } from 'react-bootstrap';
// import AdminHeader from '../components/admin/AdminHeader';
// import MessageFilters from '../components/admin/MessageFilters';
// import MessageList from '../components/admin/MessageList';
// import { useMessages } from '../context/MessageContext';
// import { useMessageFilters } from '../hooks/useMessageFilters';
// import {Footer} from '../components/Footer';
// import NavibarA from '../components/NavibarA';



//   const AdminSupportPage = () => {
//   const adminName = "Hello, Garima Khasdeo";
//   const { messages, updateMessageStatus } = useMessages();
//   const { filters, setFilters, resetFilters, filteredMessages } = useMessageFilters(messages);

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [filterType]: value
//     }));
//   };

//   const handleStatusChange = (messageIndex, newStatus) => {
//     updateMessageStatus(messageIndex, newStatus);
//   };

//   const totalMessages = messages.length;
//   const newMessages = messages.filter(m => m.status === 'New').length;

//   return (
//     <div>
//       {/* <header style={headerStyle}>
//         <h2 style={headerTitleStyle}>Welcome to the Admin Panel</h2>
//         <p style={adminNameStyle}>{adminName}</p>
//       </header> */}
//       <NavibarA/>

//       <div className="admin-page" style={pageStyle}>
//         <Container fluid className="p-4">
//           <AdminHeader 
//             totalMessages={totalMessages}
//             newMessages={newMessages}
//           />
//           <div className="filters-section">
//             <MessageFilters 
//               filters={filters}
//               onFilterChange={handleFilterChange}
//               onReset={resetFilters}
//             />
//           </div>
//           <div className="message-table">
//             <MessageList 
//               messages={filteredMessages}
//               onStatusChange={handleStatusChange}
//             />
//           </div>
//         </Container>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// const headerStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   right: 0,
//   backgroundColor: '#2e7d32',
//   height: "60px",
//   zIndex: 1000,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   padding: "0 20px",
// };

// const headerTitleStyle = {
//   color: "white",
//   textAlign: "center",
//   flex: 1,
//   fontSize: "20px",
//   marginLeft: "15%",
// };

// const adminNameStyle = {
//   color: "white",
//   fontSize: "18px",
//   margin: "0",
// };

// // Add this style for margin
// const pageStyle = {
//   marginTop: "3rem",
// };
// export default AdminSupportPage;

// import { Container } from 'react-bootstrap';
// import AdminHeader from '../components/admin/AdminHeader';
// import MessageFilters from '../components/admin/MessageFilters';
// import MessageList from '../components/admin/MessageList';
// import { useMessages } from '../context/MessageContext';
// import { useMessageFilters } from '../hooks/useMessageFilters';
// import {Footer} from '../components/Footer';
// import NavibarA from '../components/NavibarA';

// import { useState, useEffect, useMemo } from 'react';
// import { Container } from 'react-bootstrap';
// import AdminHeader from '../components/admin/AdminHeader';
// import MessageFilters from '../components/admin/MessageFilters';
// import MessageList from '../components/admin/MessageList';
// import { messageService } from '../services/messageService';
// import { isInDateRange } from '../utils/dateUtils';
//  import {Footer} from '../components/Footer';
//  import NavibarA from '../components/NavibarA';




// const AdminSupportPage = () => {
//   const [messages, setMessages] = useState([]);
//   const [filters, setFilters] = useState({
//     status: 'all',
//     dateRange: 'all',
//     search: ''
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const loadMessages = async () => {
//     try {
//       setLoading(true);
//       let data;
//       if (filters.status !== 'all') {
//         data = await messageService.getMessagesByStatus(filters.status);
//       } else {
//         data = await messageService.getAllMessages();
//       }
//       setMessages(data);
//       setError(null);
//     } catch (err) {
//       setError('Failed to load messages');
//       console.error('Error loading messages:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadMessages();
//   }, [filters.status]);

//   const filteredMessages = useMemo(() => {
//     return messages.filter(message => {
//       // Date range filter
//       if (filters.dateRange !== 'all' && !isInDateRange(message.createdAt, filters.dateRange)) {
//         return false;
//       }

//       // Search filter (case-insensitive)
//       if (filters.search) {
//         const searchTerm = filters.search.toLowerCase();
//         const emailMatch = message.email.toLowerCase().includes(searchTerm);
//         const nameMatch = message.name.toLowerCase().includes(searchTerm);
//         if (!emailMatch && !nameMatch) {
//           return false;
//         }
//       }

//       return true;
//     });
//   }, [messages, filters.dateRange, filters.search]);

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [filterType]: value
//     }));
//   };

//   const handleStatusChange = async (messageId, newStatus) => {
//     try {
//       await messageService.updateMessageStatus(messageId, newStatus);
//       await loadMessages();
//     } catch (err) {
//       setError('Failed to update message status');
//       console.error('Error updating status:', err);
//     }
//   };

//   const resetFilters = () => {
//     setFilters({
//       status: 'all',
//       dateRange: 'all',
//       search: ''
//     });
//   };

//   const totalMessages = filteredMessages.length;
//   const newMessages = filteredMessages.filter(m => m.status === 'NEW').length;

//   return (
//     <div className="admin-page">
//       <Container fluid className="p-4">
//         <AdminHeader 
//           totalMessages={totalMessages}
//           newMessages={newMessages}
//         />
//         <div className="filters-section">
//           <MessageFilters 
//             filters={filters}
//             onFilterChange={handleFilterChange}
//             onReset={resetFilters}
//           />
//         </div>
//         <div className="message-table">
//           {loading ? (
//             <p className="text-center p-4">Loading messages...</p>
//           ) : error ? (
//             <p className="text-danger text-center p-4">{error}</p>
//           ) : (
//             <MessageList 
//               messages={filteredMessages}
//               onStatusChange={handleStatusChange}
//             />
//           )}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default AdminSupportPage;

import { useState, useEffect, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import AdminHeader from '../components/admin/AdminHeader';
import MessageFilters from '../components/admin/MessageFilters';
import MessageList from '../components/admin/MessageList';
import { messageService } from '../services/messageService';
import { isInDateRange } from '../utils/dateUtils';
import { Footer } from '../components/Footer';
import NavibarA from '../components/NavibarA';


const AdminSupportPage = () => {
  const [messages, setMessages] = useState([]);
  const [filters, setFilters] = useState({
    status: 'all',
    dateRange: 'all',
    search: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMessages = async () => {
    try {
      setLoading(true);
      let data;
      if (filters.status !== 'all') {
        data = await messageService.getMessagesByStatus(filters.status);
      } else {
        data = await messageService.getAllMessages();
      }
      setMessages(data);
      setError(null);
    } catch (err) {
      setError('Failed to load messages');
      console.error('Error loading messages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
  }, [filters.status]);

  const filteredMessages = useMemo(() => {
    return messages.filter(message => {
      // Date range filter
      if (filters.dateRange !== 'all' && !isInDateRange(message.createdAt, filters.dateRange)) {
        return false;
      }

      // Search filter (case-insensitive)
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const emailMatch = message.email.toLowerCase().includes(searchTerm);
        const nameMatch = message.name.toLowerCase().includes(searchTerm);
        if (!emailMatch && !nameMatch) {
          return false;
        }
      }

      return true;
    });
  }, [messages, filters.dateRange, filters.search]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleStatusChange = async (messageId, newStatus) => {
    try {
      await messageService.updateMessageStatus(messageId, newStatus);
      await loadMessages();
    } catch (err) {
      setError('Failed to update message status');
      console.error('Error updating status:', err);
    }
  };

  const resetFilters = () => {
    setFilters({
      status: 'all',
      dateRange: 'all',
      search: ''
    });
  };

  const totalMessages = filteredMessages.length;
  const newMessages = filteredMessages.filter(m => m.status === 'NEW').length;

  return (
    <div className="admin-page">
      {/* Navbar */}
      <NavibarA />

      {/* Main Content */}
      <Container fluid className="p-4">
        <AdminHeader 
          totalMessages={totalMessages}
          newMessages={newMessages}
        />
        <div className="filters-section">
          <MessageFilters 
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={resetFilters}
          />
        </div>
        <div className="message-table">
          {loading ? (
            <p className="text-center p-4">Loading messages...</p>
          ) : error ? (
            <p className="text-danger text-center p-4">{error}</p>
          ) : (
            <MessageList 
              messages={filteredMessages}
              onStatusChange={handleStatusChange}
            />
          )}
        </div>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminSupportPage;
