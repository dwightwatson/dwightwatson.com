import { kebabCase } from "lodash";
import Link from "next/link";

export default function Tag({ tag }) {
  return (
    <Link
      href={`/tags/${kebabCase(tag)}`}
      className="underline text-sm text-gray-500"
    >
      #{kebabCase(tag)}
    </Link>
  );
}
