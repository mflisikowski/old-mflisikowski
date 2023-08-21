import { SignInForm } from "@/components/(auth)/sign-in-form";
import { BackLink } from "@/components/(shared)/back-link";

export default function Login() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <BackLink
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        href="/"
      >
        Back
      </BackLink>
      <SignInForm />
    </div>
  );
}
