import { format } from "date-fns";

export const formatTimeForView = (date: Date) => {
  return format(date, "hh:mm:ss dd.mm.yyyy");
};
