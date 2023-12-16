import fs from "fs";
import path from "path";
import matter from "gray-matter";

function parseFrontmatter(fileContent) {
  let parsedContent = matter(fileContent);

  parsedContent.data.url = `/posts/${parsedContent.data.slug}`;

  return parsedContent;
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");

  return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { data, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      data,
      slug,
      content,
    };
  });
}

export function getPosts() {
  return getMDXData(path.join(process.cwd(), "posts"));
}
