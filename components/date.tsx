import { format } from "date-fns";

export default function Date({ date, ...props }) {
  return (
    <time dateTime={format(date, "yyyy-MM-dd")} {...props}>
      {format(date, "MMMM d, yyyy")}
    </time>
  );
}
