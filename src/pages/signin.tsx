// pages/signin.tsx
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div>
      <h1>Sign in</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.currentTarget.email.value;
          const password = e.currentTarget.password.value;
          signIn("credentials", { email, password });
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Enter your password"
        />

        <button type="submit">Sign in</button>
      </form>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
}