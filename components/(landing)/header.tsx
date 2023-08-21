/* eslint-disable @next/next/no-img-element */
import { SignOutButton } from "@/components/(auth)/sign-out-button";
import { Navigation } from "@/components/(landing)/navigation";
import { BrandIcon } from "@/icons/brand-icon";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { SignInLink } from "../(auth)/sign-in-link";

const navigation = [
  { name: "CV", href: "/curriculum-vitae" },
  { name: "Projects", href: "/projects" },
  { name: "Uses", href: "/uses" },
  { name: "Contact", href: "/contact" },
];

export const Header = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <header className="py-16 bg-white/40">
      <nav
        className="mx-auto flex items-center justify-between gap-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 uppercase">
            <BrandIcon className="fill-zinc-800 w-6 h-auto" />
          </Link>
        </div>
        <div className="flex gap-x-12">
          <Navigation
            className="text-sm leading-6 text-gray-900 uppercase"
            items={navigation}
          />
        </div>
        <div className="flex items-center">
          {session ? (
            <SignOutButton className="text-sm leading-6 text-gray-900 uppercase hidden" />
          ) : (
            <SignInLink className="text-sm leading-6 text-gray-900 uppercase hidden" />
          )}
        </div>
      </nav>
    </header>
  );
};
