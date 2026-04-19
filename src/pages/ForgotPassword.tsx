export default function ForgotPassword() {
  return (
    <div>
      <p>Forgot your password?</p>
      <p>No problem, we'll email you instructions to reset your password</p>
      <label> Enter your email</label>
      <input type="email" />
      <input type="submit" value="Submit" />
      <a href="/login">Back to login</a>
      <p>
        Don't have an account? <a href="/sign-up">Sign up</a>
      </p>
    </div>
  );
}
