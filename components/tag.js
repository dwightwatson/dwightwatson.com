import { kebabCase } from "lodash";
import Link from "next/link";

export default function Tag({ tag }) {
  <Link
    href={`/tags/${kebabCase(tag)}`}
    className="underline text-sm text-blue-500 mr-4"
  >
    #{kebabCase(tag)}
  </Link>;
}
