const date: Date = new Date();

type Months = string[];

const months: Months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const month: number = date.getMonth();

const day: number = date.getDate();
const nameOfMonth = months[month];

export { day, nameOfMonth };