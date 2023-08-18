export function AuthSignOut({ ...props }) {
  return (
    <form action="/auth/sign-out" method="post">
      <button {...props}>Wyloguj</button>
    </form>
  );
}
