export function SignOutButton({ ...props }) {
  return (
    <form action="/auth/sign-out" method="post">
      <button {...props}>Logout</button>
    </form>
  );
}
