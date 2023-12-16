import { Code } from "bright";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  a: ({ href, children }) => <Link href={href}>{children}</Link>,
  pre: (props) => <Code theme={"one-dark-pro"} {...props} />,
};

interface MdxProps {
  source: string;
}

export default function Mdx({ source }: MdxProps) {
  return <MDXRemote source={source} components={components} />;
}
