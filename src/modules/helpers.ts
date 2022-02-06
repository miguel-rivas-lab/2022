import { DateTime } from "luxon";

const helpers = {
  dateToNumber(date: string): number {
    return parseInt(date.split("/").join(""));
  },
  turingDate(date) {
    const newDate = DateTime.fromISO(date.replace(/[/]/g, "-")).minus({years: 1990, months: 5, days: 5});
    return `J${newDate.year} M${newDate.month < 10 ? `0${newDate.month}`: newDate.month } T${newDate.day < 10 ? `0${newDate.day}`: newDate.day }`;
  },
  currentTuringDate() {
    const newDate = DateTime.now().minus({years: 1990, months: 5, days: 5});
    return `J${newDate.year} M${newDate.month < 10 ? `0${newDate.month}`: newDate.month } T${newDate.day < 10 ? `0${newDate.day}`: newDate.day }`;
  },
  getID(client: string, date: string): string {
    client = client.replace(/[\s./]/g, "").toLowerCase();
    date = date.replace(/\//g, "");
    return `${client}_${date}`;
  },
  getNewID(client: string, date: string): string {
    client = client.replace(/[\s./]/g, "").toLowerCase();
    date = date.replace(/\//g, "");
    return `${date}_${client}`;
  },
}

export default helpers;