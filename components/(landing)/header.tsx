/* eslint-disable @next/next/no-img-element */
import { Brand } from "@/icons/brand";
import Link from "next/link";
import { Navigation } from "./navigation";

const navigation = [
  { name: "CV", href: "/curriculum-vitae" },
  { name: "Projects", href: "/projects" },
  { name: "Uses", href: "/uses" },
  { name: "Contact", href: "/contact" },
];

export const Header = async () => {
  return (
    <header className="py-16 bg-white/40">
      <nav
        className="mx-auto flex items-center justify-between gap-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 uppercase">
            <Brand className="fill-zinc-800 w-6 h-auto" />
          </Link>
        </div>
        <div className="flex gap-x-12">
          <Navigation
            className="text-sm leading-6 text-gray-900 uppercase"
            items={navigation}
          />
        </div>
      </nav>
    </header>
  );
};
