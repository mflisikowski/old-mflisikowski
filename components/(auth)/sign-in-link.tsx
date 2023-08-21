import Link from "next/link";

export function SignInLink({ ...props }) {
  return (
    <Link href="/login" {...props}>
      Login
    </Link>
  );
}
