import { format, isToday, isThisWeek, isThisMonth, parseISO, startOfToday } from 'date-fns';

export const formatDate = (dateString) => {
  try {
    // Handle both ISO string and MySQL datetime format
    const date = typeof dateString === 'string' ? parseISO(dateString) : dateString;
    return format(date, 'MMM dd, yyyy HH:mm');
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
};

export const isInDateRange = (dateString, range) => {
  try {
    const date = typeof dateString === 'string' ? parseISO(dateString) : dateString;
    const today = startOfToday();

    switch (range) {
      case 'today':
        return isToday(date);
      case 'week':
        return isThisWeek(date, { weekStartsOn: 1 });
      case 'month':
        return isThisMonth(date);
      default:
        return true;
    }
  } catch (error) {
    console.error('Error checking date range:', error);
    return false;
  }
};