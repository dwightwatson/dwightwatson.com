"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const link = (
    <Link
      href="/"
      className="text-blue-600 hover:underline decoration-blue-300"
    >
      Dwight Watson&apos;s blog
    </Link>
  );

  if (pathname === "/") {
    return <h1 className="font-serif text-2xl">{link}</h1>;
  }

  return <h3 className="font-serif text-xl">{link}</h3>;
}
