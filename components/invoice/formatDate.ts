// filepath: /C:/Users/Ajeet Rathore/Desktop/dashboard/utils/formatDate.ts
import { format } from 'date-fns';

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return format(date, 'MMMM dd, yyyy'); // Customize the date format as needed
};