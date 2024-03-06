export function formatDate(inputDate: string) {
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    const dateObject = new Date(inputDate);
    const dayOfWeek = days[dateObject.getUTCDay()];
    const month = months[dateObject.getUTCMonth()];
    const dayDate = dateObject.getUTCDate();
    const year = dateObject.getUTCFullYear();
  
    return `${dayOfWeek}, ${month} ${dayDate}, ${year}`;
  }
