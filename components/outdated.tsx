import { isBefore, sub } from "date-fns";

export default function Outdated({ date }) {
  const twoYearsAgo = sub(new Date(), { years: 2 });
  const olderPost = isBefore(new Date(date), twoYearsAgo);

  if (!olderPost) {
    return;
  }

  return (
    <div className="border border-gray-300 rounded-md p-4 mb-8">
      <p>
        <span className="font-bold">
          This blog post was originally published a little while ago.
        </span>{" "}
        Please consider that it may no longer be relevant or even accurate.
      </p>
    </div>
  );
}
