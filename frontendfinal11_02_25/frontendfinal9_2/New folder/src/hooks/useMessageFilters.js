
import { useState, useMemo } from 'react';
import { isInDateRange } from '../utils/dateUtils';

export const useMessageFilters = (messages) => {
  const [filters, setFilters] = useState({
    status: 'all',
    dateRange: 'all',
    search: ''
  });

  const resetFilters = () => {
    setFilters({
      status: 'all',
      dateRange: 'all',
      search: ''
    });
  };

  const filteredMessages = useMemo(() => {
    return messages.filter(message => {
      // Status filter
      if (filters.status !== 'all' && message.status.toLowerCase() !== filters.status) {
        return false;
      }

      // Date range filter
      if (filters.dateRange !== 'all' && !isInDateRange(message.date, filters.dateRange)) {
        return false;
      }

      // Search filter
      const searchTerm = filters.search.toLowerCase();
      if (searchTerm && !message.name.toLowerCase().includes(searchTerm) && 
          !message.email.toLowerCase().includes(searchTerm)) {
        return false;
      }

      return true;
    });
  }, [messages, filters]);

  return {
    filters,
    setFilters,
    resetFilters,
    filteredMessages
  };
};