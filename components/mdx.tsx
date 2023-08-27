import { Code } from "bright";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  a: ({ href, children }) => <Link href={href}>{children}</Link>,
  pre: (props) => <Code theme={"one-dark-pro"} {...props} />,
};

interface MdxProps {
  code: string;
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
