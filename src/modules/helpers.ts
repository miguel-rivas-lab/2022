import { DateTime } from "luxon";

const helpers = {
  dateToNumber(date: string): number {
    return parseInt(date.split("/").join(""));
  },
  turingDate(date) {
    const newDate = DateTime.fromISO(date.replace(/[/]/g, "-")).minus({years: 1990, months: 5, days: 5});
    return `Y${newDate.year} M${newDate.month} D${newDate.day}`;
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