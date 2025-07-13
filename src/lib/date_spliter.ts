/* eslint-disable @typescript-eslint/no-explicit-any */
export function splitDate(date: string) {
  const obj = date.split("T");
  return obj[0];
}

export function formatTime(timeString: any) {
  const [hourString, minute] = timeString.split(":");
  const hour = +hourString % 24;
  return (hour + 1 % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
}

export function splitDateTime(date: string) {
  const obj = date.split("T");
  const res = formatTime(obj[1]);
  return res;
}
export function dateMonthName(m: any) {
  switch (m) {
    case "1":
      return "January";
      break;
    case "2":
      return "February";
      break;
    case "3":
      return "March";
      break;
    case "4":
      return "April";
      break;
    case "5":
      return "May";
      break;
    case "6":
      return "June";
      break;
    case "7":
      return "July";
      break;
    case "8":
      return "August";
      break;
    case "9":
      return "september";
      break;
    case "10":
      return "October";
      break;
    case "11":
      return "November";
      break;
    case "12":
      return "december";
      break;
    default:
      break;
  }

}
export function formatForDatetimeLocal(isoString: any) {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
export function formattedDateTime(isoString: any) {
  const date = new Date(isoString);
  // Extract the date
  const formattedDate = date.toLocaleDateString("en-US"); // Adjust locale as needed
  // Extract the 12-hour time
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  return formattedDate + " " + formattedTime;

}
export function convertToLongDate(isoDateString: any) {
  const date = new Date(isoDateString);

  // Use Intl.DateTimeFormat for localized formatting
  const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
