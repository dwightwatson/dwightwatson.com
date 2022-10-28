import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";

export default async function markdown(markdown: string) {
  const result = await remark()
    .use(html)
    // .use(prism)
    .process(markdown);
  return result.toString();
}
