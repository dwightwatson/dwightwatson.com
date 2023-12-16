import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}

function getMDXData(dir) {
  return getMDXFiles(dir).map((file) => readMDXFile(path.join(dir, file)));
}

export function getPosts() {
  return getMDXData(path.join(process.cwd(), "posts"));
}
