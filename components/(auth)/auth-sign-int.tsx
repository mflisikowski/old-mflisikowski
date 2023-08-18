import Link from "next/link";

export function AuthSignIn({ ...props }) {
  return (
    <Link href="/login" {...props}>
      Login
    </Link>
  );
}
