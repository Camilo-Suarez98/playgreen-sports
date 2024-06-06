const date: Date = new Date();

type Months = string[];

const months: Months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const month: number = date.getMonth();

const day: number = date.getDate();
const nameOfMonth = months[month];

export { day, nameOfMonth };