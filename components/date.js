import { parseJSON, format } from "date-fns";

export default function Date({ date, ...props }) {
  const parsedDate = parseJSON(date);
  return (
    <time dateTime={format(parsedDate, "yyyy-MM-dd")} {...props}>
      {format(parsedDate, "MMMM d, yyyy")}
    </time>
  );
}
