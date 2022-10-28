import { parseJSON, format } from "date-fns";

export function formatDate(date: string) {
  return format(parseJSON(date), "MMMM d, yyyy");
}
