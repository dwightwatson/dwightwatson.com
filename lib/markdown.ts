import { unified } from "unified";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

export default async function markdown(markdown: string) {
  const res = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(rehypeStringify)
    .process(markdown);

  return res.toString();
}
