// import { createContext, useContext, useState } from 'react';

// const MessageContext = createContext();

// export const MessageProvider = ({ children }) => {
//   const [messages, setMessages] = useState([
//     {
//       date: '2024-02-20',
//       name: 'Rahul Bharaskar',
//       email: 'Rahul@gmail.com',
//       subject: 'Product Inquiry',
//       message: 'I need information about your latest products.',
//       status: 'New'
//     }
//   ]);

//   const addMessage = (newMessage) => {
//     setMessages(prevMessages => [
//       {
//         ...newMessage,
//         date: new Date().toISOString().split('T')[0],
//         status: 'New'
//       },
//       ...prevMessages
//     ]);
//   };

//   const updateMessageStatus = (messageIndex, newStatus) => {
//     setMessages(prevMessages => 
//       prevMessages.map((msg, index) => 
//         index === messageIndex ? { ...msg, status: newStatus } : msg
//       )
//     );
//   };

//   return (
//     <MessageContext.Provider value={{ messages, addMessage, updateMessageStatus }}>
//       {children}
//     </MessageContext.Provider>
//   );
// };

// export const useMessages = () => {
//   const context = useContext(MessageContext);
//   if (!context) {
//     throw new Error('useMessages must be used within a MessageProvider');
//   }
//   return context;
// };

import { createContext, useContext, useState, useEffect } from 'react';
import { loadMessages, saveMessages } from '../utils/storage';

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState(() => loadMessages());

  useEffect(() => {
    saveMessages(messages);
  }, [messages]);

  const addMessage = (newMessage) => {
    setMessages(prevMessages => [
      {
        ...newMessage,
        date: new Date().toISOString().split('T')[0],
        status: 'New'
      },
      ...prevMessages
    ]);
  };

  const updateMessageStatus = (messageIndex, newStatus) => {
    setMessages(prevMessages => 
      prevMessages.map((msg, index) => 
        index === messageIndex ? { ...msg, status: newStatus } : msg
      )
    );
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage, updateMessageStatus }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessages must be used within a MessageProvider');
  }
  return context;
};