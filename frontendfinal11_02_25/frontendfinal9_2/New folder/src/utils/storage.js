const STORAGE_KEY = 'support_messages';

export const loadMessages = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading messages:', error);
    return [];
  }
};

export const saveMessages = (messages) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch (error) {
    console.error('Error saving messages:', error);
  }
};