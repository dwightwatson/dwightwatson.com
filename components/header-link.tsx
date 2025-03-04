"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLink = () => {
  const pathname = usePathname();
  const link = (
    <Link
      href="/"
      className="text-cyan-600 hover:underline decoration-cyan-300"
    >
      Dwight Watson
    </Link>
  );

  if (pathname === "/") {
    return <h1 className="font-serif text-4xl">{link}</h1>;
  }

  return <h3 className="font-serif text-xl">{link}</h3>;
};

export default HeaderLink;
